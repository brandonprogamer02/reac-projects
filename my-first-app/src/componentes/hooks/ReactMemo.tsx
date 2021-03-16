import React, { useState, memo, useRef, useEffect, useMemo } from 'react'
import useFetch from './HooksPersonalizados'
import useDebound, { useDebounce } from 'use-debounce'

interface IPropsLabelInput { data: { valueInput: string }, call: () => void }
interface IPropsBotonReplica { data: { countBoton: number } }

// React.memo es para que el functional component solo se renderize si las props cambian 
//primer parametro el componente , segundo parametro(opcional) el algoritmo de diferenciacion que retorne booleano

const LabelInput = memo((props: IPropsLabelInput) => {
   // useDebugValue('LabelInput')
   console.log('%cestoy renderizando un <LabelInput/>', 'color:red')
   props.call()
   return <input type="text" readOnly value={props.data.valueInput} />
}, (prevProps, nextProps) => (
   // si retorno true no se renderiza - si retorna false si se renderiza
   prevProps.data.valueInput === nextProps.data.valueInput ? true : false
))

const BotonReplica = memo((props: IPropsBotonReplica) => {
   console.log('%cestoy renderizando un <BotonReplica/>', 'color:green')
   return <button>Click Me ({props.data.countBoton})</button>
}, (prevProps, nextProps) => (
   // si retorno true no se renderiza - si retorna false si se renderiza
   prevProps.data.countBoton === nextProps.data.countBoton ? true : false
))

const App = () => {
   const [stateInput, setStateInput] = useState('1');
   const [stateCountClick, setStateCountClick] = useState(0);
   let refInput = useRef<HTMLInputElement>(null);
   const [state] = useDebounce(stateInput, 1000)

   const [data, isLoading] = useFetch('https://jsonplaceholder.typicode.com/users?id=' + state);
   useEffect(() => {
      console.log('lo que se imprime es ', state)
   }, [state])

   const handlerButtom = () => {
      console.log('se esta llamnado al boton')
      setStateCountClick(stateCountClick + 1)
   };
   console.log('renderizado')
   return (
      <div>
         <input ref={refInput} type="number" value={stateInput} onChange={(event) => setStateInput(event.currentTarget.value)} />
         <button
            onClick={handlerButtom}
         >Click Me ({stateCountClick})
         </button>
         <hr /> <h3>PANEL REPLICA</h3>
         <LabelInput data={{ valueInput: stateInput }} call={handlerButtom} />
         <BotonReplica data={{ countBoton: stateCountClick }} />
         <h1>Data recibida del hook personalizado</h1>

         {isLoading ? <h2>Se esta cargando</h2> : (
            <div>
               {console.log('mera esta es la real', data)}
               <label>Nombre</label> : {data[0].name}
               <label>Username</label> : {data[0].username}
               <label>Website</label> : {data[0].website}
               <label>Phone</label> : {data[0].phone}
            </div>
         )}
         {/* {isLoading ? <h2>Se esta cargando</h2> : (
            <ul>
               {(data as Array<any>).map((element, index) => <li key={element + index.toString()}>{element.name}</li>)}
            </ul>
         )} */}
      </div>
   );
}

export default App
