import { materiaRenderizadoAction } from '../types/materiaRenderizado'
import { typeMateria } from '../../LocalStorage'

// CONSTANTS
export const NUEVA_MATERIA_SELECCIONADO = 'NUEVA_MATERIA_SELECCIONADO'
export const BORRAR_MATERIA_SELECCIONADO = 'BORRAR_MATERIA_SELECCIONADO'
export const UPDATE_MATERIA_SELECCIONADO = 'UPDATE_MATERIA_SELECCIONADO'

// ACTIONS CREATORS

export const nuevaMateria = (materia: typeMateria): materiaRenderizadoAction => ({
    type: NUEVA_MATERIA_SELECCIONADO,
    payload: {
        materia
    }
})

export const borrarMateria = (materia: typeMateria): materiaRenderizadoAction => ({
    type: BORRAR_MATERIA_SELECCIONADO,
    payload: {
        materia
    }
})

export const updateMateria = (id: string, materia: typeMateria): materiaRenderizadoAction => {
    return ({
        type: UPDATE_MATERIA_SELECCIONADO,
        payload: {
            materia
           
        }
    })
}