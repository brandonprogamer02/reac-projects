import { typeData } from '../../LocalStorage'
import { IProps as quizType } from '../Quiz/types'
export interface IProps { setView: (viewType: string) => void }

export interface IState {
   mostrarDialogoNuevoQuiz: boolean,
   quizzes: Array<IPropsQuiz>
}

export interface IReducer {
   index: number

}

export interface IContext {
   quizProperties: {
      updateQuiz: (pregunta: string, respuestas: string[], correcta: string, count: number) => void,
      dataQuiz: typeData,
      indexQuizSelected: number | null,
      quizSelected: quizType,
      updateTitle: (titulo: string) => void,
      actualizarLocalStorage: () => void
   },
   dialogoNuevoQuiz: {
      cerrarDialogo: () => void;
      addQuiz: (pregunta: string, respuestas: string[], correcta: string) => void;
   },
   quiz: {
      setQuizSelected: (index: number) => void,

   }
}