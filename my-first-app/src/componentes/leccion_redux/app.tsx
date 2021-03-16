import React from 'react'
import { store } from './redux'
import Counter from './Counter/Counter'
import { Provider } from 'react-redux'
import Persona from './Persona/Persona'
import Productos from './Productos/Productos'


const App = () => {

   return (
      <Provider store={store} >
         <Counter />
         <hr/>
         <Persona />
         <hr/>
         <Productos />
      </Provider>
   )
}
export default App

