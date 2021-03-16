import { typeMateria, typeDataCuatrimestres } from '../../LocalStorage'
import { typeApiMateria } from '../../ApiMaterias'
import { CuatrimestreState } from './cuatrimestre'
import { CuatrimestreMapDispatchToProps, CuatrimestreMapStateToProps } from './cuatrimestre'
import { MateriaRenderizadoMapStateToProps } from './materiaRenderizado'


export type State = {
    cuatrimestres: CuatrimestreState,
    materiaRenderizado: typeMateria[]
}

export interface Props extends CuatrimestreMapStateToProps, CuatrimestreMapDispatchToProps { }