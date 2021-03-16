import { typeMateria } from '../../LocalStorage'
import { State } from '../types/generalTypes'
import {
    MateriaRenderizadoMapDispatchToProps, MateriaRenderizadoMapStateToProps,
    CuatrimestreDispatch
} from '../types/materiaRenderizado'
import { borrarMateria, nuevaMateria } from '../actions/materiaSeleccionado.action'

// export const materiaRenderizadoMapStateToProps = (state: State): MateriaRenderizadoMapStateToProps => {
//     return { materiaRenderizado: state.materiaRenderizado }
// }

// export const materiaRenderizadoMapDispatchToProps = (dispatch: CuatrimestreDispatch): MateriaRenderizadoMapDispatchToProps => ({
//     nuevaMateria: (materia: typeMateria) => dispatch(nuevaMateria(materia)),
//     borrarMateria: (materia: typeMateria) => dispatch(borrarMateria(materia)),
// })