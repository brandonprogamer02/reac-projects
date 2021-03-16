import { Quiz } from './componentes/Quiz/types'

export type typeDataProyecto = { titulo: string, quizzes: Quiz[] };

export const addLocalStorage = (data: typeDataProyecto) => {
   const dataPrev = getLocalStorage()
   const newData: typeDataProyecto[] = [...dataPrev, data]
   localStorage.setItem('quizzes', JSON.stringify(newData))
}

export const deleteLocalStorage = (index: number) => {
   const dataPrev: typeDataProyecto[] = getLocalStorage()
   const newData = dataPrev.filter((element, indice) => indice !== index)
   localStorage.setItem('quizzes', JSON.stringify(newData))
}

export const updateLocalStorage = (index: number, data: typeDataProyecto) => {
   let dataPrev = getLocalStorage()
   dataPrev[index] = data
   localStorage.setItem('quizzes', JSON.stringify(dataPrev))
}

export const getLocalStorage = (): typeDataProyecto[] => {
   const res = localStorage.getItem('quizzes')
   if (res === null) {
      localStorage.setItem('quizzes', JSON.stringify([]))
      return []
   } else {
      return JSON.parse(res)
   }
}