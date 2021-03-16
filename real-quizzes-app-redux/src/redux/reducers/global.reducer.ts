import { GlobalState, ActionGlobal } from '../types/global'
import {
   ADD_NEW_PROJECT, SET_PROYECTO_SELECCIONADO, SET_ROUTE, SET_QUIZ_SELECCIONADO, UPDATE_QUIZ, ADD_QUIZ, SET_TITULO,
   REMOVE_REPUESTA, ADD_RESPUESTA, REMOVE_PROJECT
} from '../actions/global.action'
import { addLocalStorage, getLocalStorage, typeDataProyecto } from '../../LocalStorage'


const inicialState: GlobalState = {
   proyectos: getLocalStorage(),
   seleccionado: {
      proyecto: -1,
      quiz: -1
   },
   ruta: '/'
}

const Global = (state = inicialState, action: ActionGlobal) => {

   switch (action.type) {
      case SET_PROYECTO_SELECCIONADO:
         if (action.payload.index === undefined) throw new Error('')
         const indice = action.payload.index
         let newState: GlobalState = {
            ...state,
            seleccionado: {
               ...state.seleccionado,
               proyecto: indice
            }
         }
         return newState

      case ADD_NEW_PROJECT:
         if (action.payload.proyecto === undefined) throw new Error('NO MANDASTE UN PROYECTO EN PAYLOAD')
         const newState2: GlobalState = { ...state, proyectos: [...state.proyectos, action.payload.proyecto] }
         addLocalStorage(action.payload.proyecto)
         return newState2

      case SET_ROUTE:
         if (action.payload.ruta === undefined) throw new Error('NO MANDASTE LA RUTA EN PAYLOAD')
         return { ...state, ruta: action.payload.ruta }

      case SET_QUIZ_SELECCIONADO:
         if (action.payload.index === undefined) throw new Error('NO MANDASTE EL INDEX EN PAYLOAD')
         const newState3: GlobalState = {
            ...state,
            seleccionado: {
               ...state.seleccionado,
               quiz: action.payload.index
            }
         }
         return newState3
      case UPDATE_QUIZ:
         if (action.payload.quiz === undefined) throw new Error('NO MANDASTE EL QUIZ EN PAYLOAD')
         if (action.payload.index === undefined) throw new Error('NO MANDASTE EL INDICE EN PAYLOAD')
         const quizEnviado = action.payload.quiz
         const newState4: GlobalState = {
            ...state,
            proyectos: state.proyectos.map((proyecto, indice) => {
               if (indice === state.seleccionado.proyecto) {
                  const newProyecto: typeDataProyecto = {
                     titulo: proyecto.titulo,
                     quizzes: proyecto.quizzes.map((quiz, index) => index === action.payload.index ? quizEnviado : quiz)
                  }
                  return newProyecto
               }
               return proyecto
            })
         }
         return newState4
      case ADD_QUIZ:
         if (action.payload.quiz === undefined) throw new Error('NO MANDASTE EL QUIZ EN PAYLOAD')
         const newQuiz = action.payload.quiz
         const newState5: GlobalState = {
            ...state,
            proyectos: state.proyectos.map((proyecto, indice) => {
               if (indice === state.seleccionado.proyecto) {
                  const newProject = proyecto
                  newProject.quizzes.push(newQuiz)
                  return newProject
               }
               return proyecto
            })

         }
         return newState5

      case SET_TITULO:
         if (action.payload.titulo === undefined) throw new Error('')
         const titulo = action.payload.titulo
         const newState6: GlobalState = {
            ...state,
            proyectos: state.proyectos.map((proyecto, index) => {
               if (index === state.seleccionado.proyecto) {
                  const newProyecto: typeDataProyecto = { titulo, quizzes: proyecto.quizzes }
                  return newProyecto
               }
               return proyecto
            })
         }
         return newState6
      case REMOVE_REPUESTA:
         if (action.payload.index === undefined) throw new Error('')
         const indiceARemover: number = action.payload.index
         const newState7: GlobalState = {
            ...state, proyectos: state.proyectos.map((proyecto, index) => {
               if (index == state.seleccionado.proyecto) {
                  const newProject: typeDataProyecto = {
                     ...proyecto,
                     quizzes: proyecto.quizzes.map((quiz, quizIndex) => {
                        const _quiz = quiz
                        if (quizIndex === state.seleccionado.quiz) {
                           _quiz.respuestas = _quiz.respuestas.filter((respuesta, indexRespuesta) => indexRespuesta !== indiceARemover)
                        }
                        return _quiz
                     })
                  }
                  return newProject
               }
               return proyecto
            })

         }
         return newState7
      case ADD_RESPUESTA:
         if (action.payload.respuesta === undefined) throw new Error('')
         const respuesta = action.payload.respuesta
         const newState8: GlobalState = {
            ...state, proyectos: state.proyectos.map((proyecto, index) => {
               if (index == state.seleccionado.proyecto) {
                  const newProject: typeDataProyecto = {
                     ...proyecto,
                     quizzes: proyecto.quizzes.map((quiz, quizIndex) => {
                        const _quiz = quiz
                        if (quizIndex === state.seleccionado.quiz) {
                           _quiz.respuestas.push(respuesta)
                        }
                        return _quiz
                     })
                  }
                  return newProject
               }
               return proyecto
            })

         }
         return newState8
      case REMOVE_PROJECT:
         if (action.payload.index === undefined) throw new Error('')
         const indiceRemoveProject: number = action.payload.index
         const newState9: GlobalState = {
            ...state,
            proyectos: state.proyectos.filter((proyecto, index) => index !== indiceRemoveProject)
         }
         // console.log(newState9.proyectos)
         return newState9

      default: return state
   }

}

export default Global