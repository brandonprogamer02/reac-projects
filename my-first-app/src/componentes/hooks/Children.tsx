import React from 'react'

interface IProps { children: [string, string, () => any] }

const Hijo = ({ children }: any) => {

   // console.log((children[3] as HTMLDivElement).classList )
   return (
      <div>
         <h1>Yo soy {'<Hijo/>'}</h1>
         {children[2]}
      </div>
   )
}

const App = () => {

   return (
      <div>
         <Hijo>
            {'mere cabron'}

            {`Yo tengo ${15 + 3} anos de edad`}
            {() => <label> mera cabron</label>}


         </Hijo>

      </div>);

}

export default App
