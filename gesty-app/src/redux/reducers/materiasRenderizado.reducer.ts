import { materiaRenderizadoState, materiaRenderizadoAction } from '../types';
import { NUEVA_MATERIA_SELECCIONADO, BORRAR_MATERIA_SELECCIONADO, UPDATE_MATERIA_SELECCIONADO, REPLACE_MATERIA_SELECCIONADO } from '../actions/materiaSeleccionado.action'
import apiMateria, { typeApiMateria } from '../../ApiMaterias'

const initialState: materiaRenderizadoState = apiMateria;

const materiaRenderizado = (state: materiaRenderizadoState = initialState, action: materiaRenderizadoAction) => {

    switch (action.type) {
        case NUEVA_MATERIA_SELECCIONADO:
            const newState1: materiaRenderizadoState = state.filter(el => el.materia !== (action.payload.materia as typeApiMateria).materia);
            return newState1;
        case BORRAR_MATERIA_SELECCIONADO:
            const newState2: materiaRenderizadoState = [...state, action.payload.materia as typeApiMateria];
            return newState2;
        case UPDATE_MATERIA_SELECCIONADO:

            const newState3: materiaRenderizadoState = state.filter(el => el.materia !== (action.payload.materia as typeApiMateria).materia);
            (action.payload.materiaPrev?.materia as string) !== '' && newState3.push(action.payload.materiaPrev as typeApiMateria);

            return newState3;
        case REPLACE_MATERIA_SELECCIONADO:
            return action.payload.materias;

        default: return state
    }

}

export default materiaRenderizado