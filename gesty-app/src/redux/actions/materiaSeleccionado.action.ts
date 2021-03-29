import { materiaRenderizadoAction } from '../types';
import { typeApiMateria } from '../../ApiMaterias';

// CONSTANTS
export const NUEVA_MATERIA_SELECCIONADO = 'NUEVA_MATERIA_SELECCIONADO';
export const BORRAR_MATERIA_SELECCIONADO = 'BORRAR_MATERIA_SELECCIONADO';
export const UPDATE_MATERIA_SELECCIONADO = 'UPDATE_MATERIA_SELECCIONADO';
export const REPLACE_MATERIA_SELECCIONADO = 'REPLACE_MATERIA_SELECCIONADO';

// ACTIONS CREATORS

export const nuevaMateriaSeleccionado = (materia: typeApiMateria): materiaRenderizadoAction => ({
    type: NUEVA_MATERIA_SELECCIONADO,
    payload: {
        materia
    }
});

export const borrarMateriaSeleccionado = (materia: typeApiMateria): materiaRenderizadoAction => ({
    type: BORRAR_MATERIA_SELECCIONADO,
    payload: {
        materia
    }
});

export const updateMateriaSeleccionado = (materiaPrev: typeApiMateria, materiaNext: typeApiMateria): materiaRenderizadoAction => {
    return ({
        type: UPDATE_MATERIA_SELECCIONADO,
        payload: {
            materia: materiaNext,
            materiaPrev
        }
    })
};

export const replaceMateriaSeleccionado = (materias: typeApiMateria[]): materiaRenderizadoAction => {
    return ({
        type: REPLACE_MATERIA_SELECCIONADO,
        payload: {
            materias
        }
    })
};