import { createStore, combineReducers, applyMiddleware } from 'redux';
import CuatrimestreReducer from './reducers/cuatrimestre.reducer';
import materiaReducerReducer from './reducers/materiasRenderizado.reducer';
import realMiddlerware from './middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = combineReducers({
    cuatrimestres: CuatrimestreReducer,
    materiaRenderizado: materiaReducerReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(realMiddlerware)))