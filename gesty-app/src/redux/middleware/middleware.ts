import { State } from '../types/generalTypes'
import { CuatrimestreAction, CuatrimestreDispatch } from '../types/cuatrimestre'
import { materiaRenderizadoAction } from '../types/materiaRenderizado'
import { Store } from 'redux'
import { replaceLocalStorage } from '../../LocalStorage'
import { ADD_MATERIA, DELETE_MATERIA, UPDATE_MATERIA } from '../actions/cuatrimestre.action'
import { nuevaMateria, borrarMateria, updateMateria } from '../actions/materiaSeleccionado.action'

type Action = CuatrimestreAction | materiaRenderizadoAction
type Middlerware = (store: any) => (next: CuatrimestreDispatch) => (action: CuatrimestreAction) => void

const middleware: Middlerware = (store: Store) => next => action => {
    // console.log('se esta tirando una accion', action.type)

    // ME QUEDE HACIENDO QUE ESTO FUNCIONARA EL MIDDLEWARE PARA QUE SE CARGARA EL OTRO ESTADO

    // actualizamos el estado de materiasRenderizado
    if (action.type === ADD_MATERIA) {
        store.dispatch(nuevaMateria(action.payload.actionMateria.materia))
    }
    else if (action.type === DELETE_MATERIA) {
        console.log(action.payload.actionMateria.materia)
        store.dispatch(borrarMateria(action.payload.actionMateria.materia))
    }
    else if (action.type === UPDATE_MATERIA) {
        // ahi que ver que esta entrando por parte del materiaRenderizado
        const id = action.payload.actionMateria.materia.id
        const materia = action.payload.actionMateria.materia
        store.dispatch(updateMateria(id, materia))
    }

    next(action)

    setTimeout(() => {
        const state: State = store.getState()
        replaceLocalStorage(state)
    }, 500)

}

export default middleware