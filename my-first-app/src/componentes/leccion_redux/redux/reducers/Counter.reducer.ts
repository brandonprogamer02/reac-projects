
import {INCREMENT , DECREMENT , NADA} from '../actions/Counter.action'
import { CounterAction } from '../types/Counter'
import {CounterMapStateToProps} from '../types/Counter'

const inicialState: CounterMapStateToProps = { count: 0 }

const count = (state = inicialState, action: CounterAction) => {
   if (action.type === INCREMENT) return { ...state, count: state.count + 1 }
   else if (action.type === DECREMENT) return { ...state, count: state.count - 1 }
   else if (action.type === NADA) return { ...state }
   return state
};

export default count


