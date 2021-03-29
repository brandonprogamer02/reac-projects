import { CuatrimestreAction, CuatrimestreDispatch, materiaRenderizadoAction, State } from '../redux/types';
import { Store } from 'redux';
import { replaceLocalStorage } from '../LocalStorage';
import { ADD_MATERIA, DELETE_MATERIA, UPDATE_MATERIA } from './actions/cuatrimestre.action';
import { nuevaMateriaSeleccionado, borrarMateriaSeleccionado, updateMateriaSeleccionado, BORRAR_MATERIA_SELECCIONADO } from './actions/materiaSeleccionado.action';

type Action = CuatrimestreAction | materiaRenderizadoAction
type Middlerware = (store: any) => (next: CuatrimestreDispatch) => (action: CuatrimestreAction) => void

const middleware: Middlerware = (store: Store) => next => action => {

    if (action.type === DELETE_MATERIA) {
        const { creditos, nombre } = action.payload.actionMateria.materia;
        store.dispatch(borrarMateriaSeleccionado({ creditos, materia: nombre }));
    }

    next(action)

    setTimeout(() => {
        const state: State = store.getState();
        replaceLocalStorage(state);
    }, 500);

}

export default middleware