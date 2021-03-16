import { CuatrimestreDispatch, CuatrimestreMapDispatchToProps, CuatrimestreMapStateToProps } from '../types/cuatrimestre'
import { addCuatrimestre, deleteCuatrimestre, addMateria, deleteMateria, replaceCuatrimestres, updateMateria } from '../actions/cuatrimestre.action'
import { typeDataCuatrimestre, typeDataCuatrimestres, typeMateria } from '../../LocalStorage'
import {State} from '../types/generalTypes'

export const mapStateToProps = (state: State): CuatrimestreMapStateToProps => {
    return state
}

export const mapDispatchToProps = (dispatch: CuatrimestreDispatch): CuatrimestreMapDispatchToProps => ({
    addCuatrimestre: (cuatrimestre: typeDataCuatrimestre) => dispatch(addCuatrimestre(cuatrimestre)),
    deleteCuatrimestre: (indice: number) => dispatch(deleteCuatrimestre(indice)),
    replaceCuatrimestres: (cuatrimestres: typeDataCuatrimestres) => dispatch(replaceCuatrimestres(cuatrimestres)),
    addMateria: (indiceCuatrimestre: number, materia: typeMateria) => dispatch(addMateria(indiceCuatrimestre, materia)),
    deleteMateria: (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria) => dispatch(deleteMateria(indiceCuatrimestre, indiceMateria, materia)),
    updateMateria: (indiceCuatrimestre: number, indiceMateria: number, materia: typeMateria) => dispatch(updateMateria(indiceCuatrimestre, indiceMateria, materia))
})
