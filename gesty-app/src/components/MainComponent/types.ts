import { typeDataCuatrimestre, typeDataCuatrimestres, typeMateria } from '../../LocalStorage'

export interface IContextMainComponent {

   cuatrimestres: typeDataCuatrimestres,
   removeCuatrimestre: (indice: number) => void,
   nuevaMateria: (indiceCuatrimestre: number, dataMateria: typeMateria) => void,
   deleteMateria: (indiceCuatrimestre: number, indiceMateria: number) => void,
   updateMateria: (indiceCuatrimestre: number, indiceMateria: number, dataMateria: typeMateria) => void
}

export interface IState {
   cuatrimestres: typeDataCuatrimestres
}

export interface IAction {
   type: string,
   dataCuatrimestre?: { indice?: number, data?: typeDataCuatrimestre }
   dataCuatrimestres?: { data: typeDataCuatrimestres },
   dataMateria?: { indice?: number, data?: typeMateria }
}
