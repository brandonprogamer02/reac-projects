import React, { useContext } from 'react'
import { myHookContext } from './MyHook'
const Hijo = () => {
   const hanndleClick = useContext(myHookContext)
   return (
      <div>
         <button
            onClick={hanndleClick}
         >Nieto Dispatcher</button>
      </div>
   )
}

export default Hijo