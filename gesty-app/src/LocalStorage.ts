import { State } from "./redux/types";

export type typeMateria = { nombre: string, creditos: number, calificacion: number, id: string, indice: number }
export type typeDataCuatrimestres = Array<typeDataCuatrimestre>;
export type typeDataCuatrimestre = typeMateria[];

export const addLocalStorage = (data: typeDataCuatrimestre) => {
   const dataPrev = getLocalStorage().cuatrimestres
   const newData: typeDataCuatrimestres = [...dataPrev, data]
   localStorage.setItem('data', JSON.stringify(newData))
};

export const deleteLocalStorage = (index: number) => {
   const dataPrev: typeDataCuatrimestres = getLocalStorage().cuatrimestres
   const newData = dataPrev.filter((element, indice) => indice !== index)
   localStorage.setItem('data', JSON.stringify(newData))
};

export const updateLocalStorage = (index: number, data: typeDataCuatrimestre) => {
   let dataPrev = getLocalStorage().cuatrimestres
   dataPrev[index] = data
   localStorage.setItem('data', JSON.stringify(dataPrev))
};

export const getLocalStorage = (): State => {
   const res = localStorage.getItem('data')
   if (res === null) {
      localStorage.setItem('data', JSON.stringify([]))
      return { cuatrimestres: [], materiaRenderizado: [] }
   } else {
      return JSON.parse(res)
   }
};

export const replaceLocalStorage = (nuevoStorage: State) => {
   getLocalStorage()
   localStorage.setItem('data', JSON.stringify(nuevoStorage))
}
