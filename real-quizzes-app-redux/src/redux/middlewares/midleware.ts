import { Middleware } from '../types/global'
import { updateLocalStorage, deleteLocalStorage } from '../../LocalStorage'
import { Store } from 'redux'
import { GlobalState, typeDataProyecto } from '../types/global'
import { REMOVE_PROJECT } from '../actions/global.action'

export const middleware: Middleware = (store: Store) => next => action => {
   
   next(action)
   if (action.type === REMOVE_PROJECT) {
      setTimeout(() => {
         const state: GlobalState = store.getState()
         const indiceProyectoSeleccioando: number = state.seleccionado.proyecto
         deleteLocalStorage(indiceProyectoSeleccioando)
      }, 1000)
      
   } else {
      setTimeout(() => {
         const state: GlobalState = store.getState()
         const indiceProyectoSeleccioando: number = state.seleccionado.proyecto
         const dataProyectoSeleccionado: typeDataProyecto = state.proyectos[indiceProyectoSeleccioando]
         updateLocalStorage(indiceProyectoSeleccioando, dataProyectoSeleccionado)
      }, 1000)
   }
}
