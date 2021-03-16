import React, { ChangeEvent, createContext, useEffect, useReducer, useRef, useState } from 'react'
import axios from 'axios'
import Hijo from './Hijo'
import { useDebounce } from 'use-debounce';

// useDebounce actualiza su estado cuando el estado que tu le pases no ha cambiado a partir del tiempo que tu le pases

type typePerson = { name: string; username: string; phone: string; website: string; }
type typeProduct = { id: string, category: string, image: string, name: string, price: number }
type State = { person: typePerson, input: string, products: Array<typeProduct> }
type typeDataReducer = { type: string, dataPerson?: typePerson, dataProduct?: Array<typeProduct>, dataInput?: string }

const inicialState: State = {
   person: { name: '', phone: '', username: '', website: '' },
   input: '',
   products: [{ id: 'todavia null', category: '', image: '', name: '', price: 200 }]
}

const reducer = (state: State, data: typeDataReducer) => {
   switch (data.type) {
      case 'person':
         if (data.dataPerson === undefined) throw new Error('property undefined')
         return { ...state, person: data.dataPerson }
      case 'product':
         if (data.dataProduct === undefined) throw new Error('property undefined')
         return { ...state, products: data.dataProduct }
      case 'input':
         if (data.dataInput === undefined) throw new Error('property undefined')
         return { ...state, input: data.dataInput }
      default:
         return state
   }
}

const myHookContext = createContext<() => Promise<void>>()
let count = 0
const MyHook = () => {
   const [state, dispatch] = useReducer(reducer, inicialState);
   const [cambioInputState] = useDebounce(state.input, 1000)

   const handdleClick = async () => {
      count++
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/' + count)
      const dataProcesada = {
         name: res.data.name, username: res.data.username, phone: res.data.phone, website: res.data.website
      }
      dispatch({ type: 'person', dataPerson: dataProcesada })
   }

   useEffect(() => {
      //useDebounce es para que no sature al servidor con peticiones y solo mande peticiones despues  que el usuario termina de escribir
      if (state.input !== '') {
         const url = 'https://universidad-react-api-test.luxfenix.now.sh/products'
         const res = axios.get(url, { params: { name: state.input } })
         res.then((el) => dispatch({ type: 'product', dataProduct: el.data.products }))
      }
   }, [cambioInputState])

   const handdleInput = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value
      dispatch({ type: 'input', dataInput: value })
   }

   return (
      < myHookContext.Provider value={handdleClick}>
         <div>
            <button
               onClick={handdleClick}
            >
               Click Me()
            </button>
            <input type="text"
               value={state.input}
               onChange={handdleInput}
            />

            <div>
               {state.products[0].id !== 'todavia null' && (state.products.map((element) => (
                  <li key={element.id}>{element.name}</li>
               )))}
            </div>
            {state.person.name === '' ? 'DEBES DARLE CLICK PARA GENERAR UN REGISTRO' : (
               <label >DATA: <br />
                  NOMBRE:${state.person.name} | USERNAME : ${state.person.username} | PHONE ${state.person.phone} | WEBSITE : ${state.person.website}
               </label>
            )}
            <Hijo />
         </div>
      </myHookContext.Provider>
   )
}

export { myHookContext }
export default MyHook