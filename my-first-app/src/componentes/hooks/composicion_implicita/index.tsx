import React from 'react'
import Counter, { Title, Button } from './Counter'

const App = () => {


   return (
      <div>
         <Counter>

            <Title>
               {(count) => (
                  <div>
                     <label>Esta es la real</label>
                     <h1>{count}</h1>
                  </div>
               )}
               </Title>
               <Title />
               <Button type='increment' />
               <Button type='decrement' />
         </Counter>
      </div>
   )
}

export default App
