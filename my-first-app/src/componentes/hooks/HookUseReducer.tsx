import React, { useState, useReducer, ChangeEvent } from 'react'
import { useDebounce } from 'use-debounce'


type State = { countClick: number, inputValue: string, selectValue: string }


type reducerDataType = { type: string, dataInput?: string, dataSelect?: string }

const reducer = (state: State, data: reducerDataType) => {
   switch (data.type) {
      case 'click':
         return { ...state, countClick: state.countClick + 1 }
      case 'input':
         if (data.dataInput === undefined) throw new Error('property undefined')
         return { ...state, inputValue: data.dataInput }
      case 'select':
         if (data.dataSelect === undefined) throw new Error('property undefined')
         return { ...state, selectValue: data.dataSelect }
      default:
         return state
   }
}
const inicialState:State = { countClick: 0, inputValue: '', selectValue: '' }

const HookUseReducer = () => {

   const [state, dispatch] = useReducer(reducer, inicialState)
   // const [cambioDebounce] = useDebounce(state.inputValue, 1000)
   const handdlerClick = () => dispatch({ type: 'click' })
   const handdlerInput = (event: ChangeEvent<HTMLInputElement>) => dispatch({ type: 'input', dataInput: event.currentTarget.value })
   const handdlerSelect = (event: ChangeEvent<HTMLSelectElement>) => dispatch({ type: 'select', dataSelect: event.currentTarget.value })

   return (
      <div>
         <button
            onClick={handdlerClick}
         >Click Me ( {state.countClick} )
         </button>
         <input type="text"
            value={state.inputValue}
            onChange={handdlerInput}
         />
         <label > Lo que tu estas escribiendo es: {state.inputValue}</label>
         <select value={state.selectValue} onChange={handdlerSelect} >
            <option>OPCION ONE</option>
            <option>OPCION TWO</option>
            <option>OPCION THREE</option>
            <option>OPCION FOUR</option>
         </select>
      </div>
   )
}

export default HookUseReducer