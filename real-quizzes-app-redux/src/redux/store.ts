import { createStore, applyMiddleware } from 'redux'
import GlobalReducer from './reducers/global.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { middleware } from './middlewares/midleware'


export const store = createStore(GlobalReducer, composeWithDevTools(applyMiddleware(middleware)))
