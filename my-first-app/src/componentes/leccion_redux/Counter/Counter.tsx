import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../redux/map/Counter.map'
import { CounterProps } from '../redux/types/Counter'

const Counter = (props: CounterProps) => {

   
   return (
      <div>
         <h1>El conteo es: {props.count}</h1>
         <button onClick={props.increment} >Increment</button>
         <button onClick={props.decrement} >Descrement</button>
      </div>
   )
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter)
