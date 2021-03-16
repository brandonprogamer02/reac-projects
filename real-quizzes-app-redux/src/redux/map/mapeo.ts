import { GlobalState, Dispatch } from '../types/global'
import { MapStateToProps, MapDispatchToProps } from '../types/global'
import { setProyectoSeleccionado, addNewProject, setRoute, setQuizSeleccionado, updateQuiz, addQuiz, setTitulo, removeRespuesta, addRespuesta, removeProject } from '../actions/global.action'
import { typeDataProyecto } from '../../LocalStorage'
import { Quiz } from '../../componentes/Quiz/types'


export const mapStateToProps = (state: GlobalState): MapStateToProps => {
   return state
}

export const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => ({

   setProyectoSeleccionado: (index: number) => dispatch(setProyectoSeleccionado(index)),

   addNewProject: (proyecto: typeDataProyecto) => dispatch(addNewProject(proyecto)),

   setRuta: (ruta: string) => dispatch(setRoute(ruta)),

   setQuizSeleccionado: (index: number, quiz: Quiz) => dispatch(setQuizSeleccionado(index)),

   updateQuiz: (index: number, quiz: Quiz) => dispatch(updateQuiz(index, quiz)),

   addQuiz: (quiz: Quiz) => dispatch(addQuiz(quiz)),

   setTitulo: (index: number, titulo: string) => dispatch(setTitulo(index, titulo)),

   removeRespuesta: (index: number) => dispatch(removeRespuesta(index)),

   addRespuesta: (respuesta: string) => dispatch(addRespuesta(respuesta)),

   removeProject: (index: number) => dispatch(removeProject(index))
})
