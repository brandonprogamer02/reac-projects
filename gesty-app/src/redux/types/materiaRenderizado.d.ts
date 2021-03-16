import {typeApiMateria} from '../../ApiMaterias'
import {typeMateria} from '../../LocalStorage'

export type materiaRenderizadoState = typeMateria[]

export interface materiaRenderizadoAction {
    type: string , 
    payload: {
        materia: typeMateria
    }
}

export interface MateriaRenderizadoMapStateToProps { materiaRenderizado: materiaRenderizadoState }


export interface MateriaRenderizadoMapDispatchToProps {
    nuevaMateria: (materia: typeMateria) => void,
    borrarMateria: (materia: typeMateria) => void

}

export type CuatrimestreDispatch = (arg0: materiaRenderizadoAction) => void