import { IState } from '../types/Redux'
import { increment, decrement } from '../actions/Counter.action'
import {CounterDispatch} from '../types/Counter'

export const mapStateToProps = (state: IState) => {
   
   return (state.stateCount)
}

export const mapDispatchToProps = (dispatch: CounterDispatch) => {
   return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement())
   }
}
