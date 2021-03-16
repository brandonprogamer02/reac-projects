import { CuatrimestreAction, CuatrimestreState } from '../types/cuatrimestre'

import {
    ADD_CUATRIMESTRE, REPLACE_CUATRIMESTRES, DELETE_CUATRIMESTRE, ADD_MATERIA, UPDATE_MATERIA,
    DELETE_MATERIA
} from '../actions/cuatrimestre.action'

export const inicialState: CuatrimestreState = [[]]

const cuatrimestre = (state: CuatrimestreState = inicialState, action: CuatrimestreAction) => {
    switch (action.type) {
        //----------------------------------------------------------------------------------------------------------
        case ADD_CUATRIMESTRE:
            const newState1: CuatrimestreState = [...state, action.payload.actionCuatrimestre.cuatrimestre]
            return newState1
        //----------------------------------------------------------------------------------------------------------
        case DELETE_CUATRIMESTRE:
            const newState2: CuatrimestreState = state.filter((cuatrimestre, index) => index !== action.payload.actionCuatrimestre.indiceCuatrimestre)
            return newState2
        //----------------------------------------------------------------------------------------------------------
        case REPLACE_CUATRIMESTRES:
            console.log(action.payload.actionCuatrimestre)
            const newState3: CuatrimestreState = state = action.payload.actionCuatrimestre.cuatrimestres
            return newState3
        //----------------------------------------------------------------------------------------------------------

        case ADD_MATERIA:
            const newState4: CuatrimestreState = state.map((cuatrimestre, indiceCuatrimestre) => {
                if (indiceCuatrimestre === action.payload.actionMateria.indiceCuatrimestre) {
                    const cuatrimestreActualizado = [...cuatrimestre, action.payload.actionMateria.materia]
                    return cuatrimestreActualizado
                }
                return cuatrimestre
            })
            return newState4
        //--------------------------------------------------------------------------------------------------
        case UPDATE_MATERIA:
            
            const newState5: CuatrimestreState = state.map((cuatrimestre, indiceCuatrimestre) => {
                
                if (indiceCuatrimestre === action.payload.actionMateria.indiceCuatrimestre) {
                    const cuatrimestreActualizado = cuatrimestre.map((materia, indiceMateria) => {
                        if (indiceMateria === action.payload.actionMateria.indiceMateria) {
                            const materiaModificada = action.payload.actionMateria.materia
                            return materiaModificada
                        }
                        return materia
                    })
                    return cuatrimestreActualizado
                }
                return cuatrimestre
            })
            return newState5

        //--------------------------------------------------------------------------------------------------
        case DELETE_MATERIA:
            const newState6: CuatrimestreState = state.map((cuatrimestre, indiceCuatrimestre) => {
                if (indiceCuatrimestre === action.payload.actionMateria.indiceCuatrimestre) {
                    const cuatrimestreActualizado = cuatrimestre.filter((materia, indiceMateria) => indiceMateria !== action.payload.actionMateria.indiceMateria)
                    return cuatrimestreActualizado
                }
                return cuatrimestre
            })
            return newState6
        //--------------------------------------------------------------------------------------------------
        default: return state
    }
}

export default cuatrimestre
