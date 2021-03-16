
import { typeDataCuatrimestre, typeMateria, typeDataCuatrimestres } from '../../LocalStorage'


export type CuatrimestreDispatch = (arg0: CuatrimestreAction) => void

export interface _CuatrimestreAction {
    cuatrimestre: typeDataCuatrimestre,
    cuatrimestres: typeDataCuatrimestres
    indiceCuatrimestre: number
}

export interface MateriaAction {
    materia: typeMateria,
    indiceCuatrimestre: number,
    indiceMateria: number
}

export interface CuatrimestreAction {
    type: string,
    payload: {
        actionMateria: MateriaAction
        actionCuatrimestre: _CuatrimestreAction
    }
}
export type CuatrimestreState = typeDataCuatrimestres

export type CuatrimestreMapStateToProps = { cuatrimestres: CuatrimestreState, materiaRenderizado: typeMateria[] }

export interface CuatrimestreMapDispatchToProps {
    addCuatrimestre: (cuatrimestre: typeDataCuatrimestre) => void,
    deleteCuatrimestre: (indice: number) => void,
    replaceCuatrimestres: (cuatrimestres: typeDataCuatrimestres) => void,
    addMateria: (indiceCuatrimestre: number, materia: typeMateria) => void,
    deleteMateria: (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria) => void,
    updateMateria: (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria) => void
}