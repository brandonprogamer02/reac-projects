import { typeApiMateria } from '../../ApiMaterias';
import { typeDataCuatrimestre, typeDataCuatrimestres, typeMateria } from '../../LocalStorage';
import { generateId } from '../../utils';
import { _CuatrimestreAction, CuatrimestreAction, MateriaAction } from '../types';

// CONSTANTS
export const ADD_CUATRIMESTRE = 'ADD_CUATRIMESTRE';
export const DELETE_CUATRIMESTRE = 'DELETE_CUATRIMESTRE';
export const REPLACE_CUATRIMESTRES = 'REPLACE_CUATRIMESTRES';
export const ADD_MATERIA = 'ADD_MATERIA';
export const DELETE_MATERIA = 'DELETE_MATERIA';
export const UPDATE_MATERIA = 'UPDATE_MATERIA';

//--------------------------------------------------------------------------------------------------------------------------------------

const defaultActionCuatrimestre: _CuatrimestreAction = { cuatrimestre: [], cuatrimestres: [], indiceCuatrimestre: 0 }

const defaultActionMateria: MateriaAction = {
    indiceCuatrimestre: 0, indiceMateria: 0,
    materia: { creditos: 0, nombre: '', calificacion: 0, id: generateId(), indice: 0 }
}

//--------------------------------------------------------------------------------------------------------------------------------------

export const addCuatrimestre = (cuatrimestre: typeDataCuatrimestre): CuatrimestreAction => ({
    type: ADD_CUATRIMESTRE,
    payload: {
        actionCuatrimestre: {
            cuatrimestre,
            indiceCuatrimestre: 0,
            cuatrimestres: []
        },
        actionMateria: defaultActionMateria

    }
})

export const deleteCuatrimestre = (indiceCuatrimestre: number): CuatrimestreAction => ({
    type: DELETE_CUATRIMESTRE,
    payload: {
        actionCuatrimestre: {
            cuatrimestre: [],
            indiceCuatrimestre,
            cuatrimestres: []
        },
        actionMateria: defaultActionMateria
    }
})

export const replaceCuatrimestres = (cuatrimestres: typeDataCuatrimestres): CuatrimestreAction => ({
    type: REPLACE_CUATRIMESTRES,
    payload: {
        actionCuatrimestre: {
            cuatrimestre: [],
            indiceCuatrimestre: 0,
            cuatrimestres
        },
        actionMateria: defaultActionMateria
    }
})

export const addMateria = (indiceCuatrimestre: number, materia: typeMateria): CuatrimestreAction => ({
    type: ADD_MATERIA,
    payload: {
        actionCuatrimestre: defaultActionCuatrimestre,
        actionMateria: {
            indiceCuatrimestre,
            materia,
            indiceMateria: 0
        }
    }
})

export const deleteMateria = (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria): CuatrimestreAction => ({
    type: DELETE_MATERIA,
    payload: {
        actionCuatrimestre: defaultActionCuatrimestre,
        actionMateria: {
            indiceCuatrimestre,
            materia,
            indiceMateria
        }
    }
})

export const updateMateria = (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria): CuatrimestreAction => {

    return ({
        type: UPDATE_MATERIA,
        payload: {
            actionCuatrimestre: defaultActionCuatrimestre,
            actionMateria: {
                indiceCuatrimestre,
                materia,
                indiceMateria
            }
        }
    })
}