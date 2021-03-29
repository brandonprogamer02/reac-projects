import { typeDataCuatrimestre, typeMateria, typeDataCuatrimestres } from '../LocalStorage';
import { typeApiMateria } from '../ApiMaterias';

export type CuatrimestreDispatch = (arg0: CuatrimestreAction) => void

export interface _CuatrimestreAction {
     cuatrimestre: typeDataCuatrimestre,
     cuatrimestres: typeDataCuatrimestres
     indiceCuatrimestre: number
}

export interface MateriaAction {
     materia: typeMateria,
     indiceCuatrimestre: number,
     indiceMateria: number
}

export interface CuatrimestreAction {
     type: string,
     payload: {
          actionMateria: MateriaAction
          actionCuatrimestre: _CuatrimestreAction
     }
}
export type CuatrimestreState = typeDataCuatrimestres

export type State = {
     cuatrimestres: CuatrimestreState,
     materiaRenderizado: typeApiMateria[]
}

export type materiaRenderizadoState = typeApiMateria[];

export interface materiaRenderizadoAction {
     type: string,
     payload: {
          materia?: typeApiMateria
          materias?: typeApiMateria[],
          materiaPrev?: typeApiMateria
     }
}


