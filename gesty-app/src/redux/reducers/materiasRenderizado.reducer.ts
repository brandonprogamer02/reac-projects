import { materiaRenderizadoState, materiaRenderizadoAction } from '../types/materiaRenderizado'
import { NUEVA_MATERIA_SELECCIONADO, BORRAR_MATERIA_SELECCIONADO, UPDATE_MATERIA_SELECCIONADO } from '../actions/materiaSeleccionado.action'

const initialState: materiaRenderizadoState = []

const materiaRenderizado = (state: materiaRenderizadoState = initialState, action: materiaRenderizadoAction) => {

    switch (action.type) {
        case NUEVA_MATERIA_SELECCIONADO:
            const newState1: materiaRenderizadoState = [...state, action.payload.materia]
            return newState1
        case BORRAR_MATERIA_SELECCIONADO:
            const newState2: materiaRenderizadoState = state.filter(materia => materia.nombre !== action.payload.materia.nombre)
            return newState2
        case UPDATE_MATERIA_SELECCIONADO:
            const newState3: materiaRenderizadoState = state.map(materia => (
                materia.id === action.payload.materia.id ? action.payload.materia : materia
            ))
            return newState3

        default: return state
    }

}

export default materiaRenderizado