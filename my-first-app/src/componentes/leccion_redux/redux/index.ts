import { createStore, combineReducers } from 'redux'
import count from './reducers/Counter.reducer'
import persona from './reducers/Persona.reducer'
import productos from './reducers/Productos.reducer'

const reducers = combineReducers({ stateCount: count, statePersona: persona , stateProductos: productos })

export const store = createStore(reducers);  