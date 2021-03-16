import { ActionGlobal } from '../types/global'
import { typeDataProyecto } from '../../LocalStorage'
import { Quiz } from '../../componentes/Quiz/types'
import { Action } from 'redux'

// constants
export const SET_PROYECTO_SELECCIONADO = 'SET_PROYECTO_SELECCIONADO'
export const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT'
export const SET_ROUTE = 'SET_ROUTE'
export const SET_QUIZ_SELECCIONADO = 'SET_QUIZ_SELECCIONADO'
export const UPDATE_QUIZ = 'UPDATE_QUIZ'
export const ADD_QUIZ = 'ADD_QUIZ'
export const SET_TITULO = 'SET_TITULO'
export const REMOVE_REPUESTA = 'REMOVE_REPUESTA'
export const ADD_RESPUESTA = 'ADD_RESPUESTA'
export const REMOVE_PROJECT = 'REMOVE_PROJECT'

// actions
export const setProyectoSeleccionado = (index: number): ActionGlobal => ({
   type: SET_PROYECTO_SELECCIONADO,
   payload: { index }
})

export const addNewProject = (proyecto: typeDataProyecto): ActionGlobal => ({
   type: ADD_NEW_PROJECT,
   payload: { proyecto }
})

export const setRoute = (ruta: string): ActionGlobal => ({
   type: SET_ROUTE,
   payload: { ruta }
})

export const setQuizSeleccionado = (index: number): ActionGlobal => ({
   type: SET_QUIZ_SELECCIONADO,
   payload: { index }
})

export const updateQuiz = (index: number, quiz: Quiz): ActionGlobal => ({
   type: UPDATE_QUIZ,
   payload: { quiz, index }
})

export const addQuiz = (quiz: Quiz): ActionGlobal => ({
   type: ADD_QUIZ,
   payload: { quiz }
})

export const setTitulo = (index: number, titulo: string): ActionGlobal => ({
   type: SET_TITULO,
   payload: { titulo, index }
})

export const addRespuesta = (respuesta: string): ActionGlobal => ({
   type: ADD_RESPUESTA,
   payload: { respuesta }
})

export const removeRespuesta = (index: number): ActionGlobal => ({
   type: REMOVE_REPUESTA,
   payload: { index }
})

export const removeProject = (index: number): ActionGlobal => ({
   type: REMOVE_PROJECT,
   payload: { index }
})
