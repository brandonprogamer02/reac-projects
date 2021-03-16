import React, { useState } from 'react'
import './estilos.css'
import { IPropsCounter, IPropsTitle, IPropsButton } from './types'


export const Button = ({ type, onIncrement, onDecrement }: IPropsButton) => (
   <button onClick={type === 'increment' ? onIncrement : onDecrement}>

      {type === 'increment' ? 'Agregar' : 'Quitar'}
   </button>
)

export const Title = ({ click, children }: IPropsTitle) => (
   click != undefined ? (
      typeof children === 'function' ? children(click) : <span>{click}</span>
   ) : <> </>
)

const Counter = ({ children }: IPropsCounter) => {
   const [stateCount, setStateCount] = useState(0);
   const handlerClickIncrement = () => setStateCount(stateCount + 1);
   const handlerClickDecrement = () => setStateCount(stateCount - 1);

   if (!children) {
      return (
         <div className='children-not-found'>
            <h3>Upss no agregaste ningun componente hijo, que es lo que te ta pansando !!!</h3>
         </div>
      )
   }
   // React.Children.map mapea las childrens, primer parametro las childrens, segundo parametro una funcion
   const _children = React.Children.map(children, (child) => {
      let props = { click: 0, onIncrement: () => { }, onDecrement: () => { } }
      if (child.type === Title) {
         props.click = stateCount
      }
      if (child.type === Button) {
         props.onIncrement = handlerClickIncrement
         props.onDecrement = handlerClickDecrement
      }
      // React.cloneElement clona un elemento acepta primero el element a clonar y como segundo un objeto con la props
      return React.cloneElement(child, props)
   })
   return (
      <div >
         <h1>Count:({stateCount})</h1>
         <button onClick={handlerClickIncrement} >Increment</button>
         <button onClick={handlerClickDecrement}>Decrement</button>
         <br />
         {_children}
      </div>
   )
}

export default Counter