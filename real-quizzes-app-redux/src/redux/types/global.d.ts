import { typeDataProyecto } from '../../LocalStorage'
import { Quiz } from '../../componentes/Quiz/types'
import { Store } from 'redux';

export { typeDataProyecto }

export interface GlobalState {
   proyectos: typeDataProyecto[],
   seleccionado: {
      proyecto: number,
      quiz: number
   },
   ruta: string
}

export type Dispatch = (arg0: ActionGlobal) => void

export interface ActionGlobal {
   type: string,
   payload: {
      index?: number,
      proyecto?: typeDataProyecto,
      ruta?: string,
      quiz?: Quiz,
      titulo?: string,
      respuesta?: string
   }
}

export interface MapStateToProps extends GlobalState { }

export interface MapDispatchToProps {
   setProyectoSeleccionado: (index: number) => void,
   addNewProject: (proyecto: typeDataProyecto) => void,
   setRuta: (ruta: string) => void,
   setQuizSeleccionado: (index: number, quiz: Quiz) => void,
   updateQuiz: (index: number, quiz: Quiz) => void
   addQuiz: (quiz: Quiz) => void,
   setTitulo: (index: number, titulo: string) => void,
   removeRespuesta: (index: number) => void,
   addRespuesta: (respuesta: string) => void,
   removeProject: (index: number) => void
}

export interface IProps extends MapDispatchToProps, MapStateToProps { }

export type Middleware = (store: any) => (next: Dispatch) => (action: ActionGlobal) => void


