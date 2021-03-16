import React, { useEffect, useState, useReducer } from 'react'
import {DivErrorMessage} from './styledErrorMessages'

const useErrorMessage = (texto: string | undefined) => {
   if (texto === undefined) throw new Error('texto not found bro');
   // ESTADOS
   const [countVecesRender, incrementCountVecesRender] = useReducer(x => x + 1, 0)
   const [change, setChange] = useReducer(x => x + 1, 0)
   const [isValidate, setIsValidate] = useState(false);
   const [message, setMessage] = useState(' ');

   const forzarValidacion = () => {
      incrementCountVecesRender()
      setChange()
   }

   useEffect(() => {
      incrementCountVecesRender()
      setIsValidate(false)
      if (texto?.trim() === '') setMessage('No puedes dejar el campo vacio')
      else if (texto.length <= 5) setMessage('Debes introducir mas de 5 caracteres')
      else setIsValidate(true)
   }, [texto , change]);

   const marcado = countVecesRender > 1 ? (isValidate ? <></> : (<DivErrorMessage> <span>{message}</span></DivErrorMessage>)) : <></>
   const res: [JSX.Element, boolean, () => void] = [marcado, isValidate, forzarValidacion];
   return res
}
export default useErrorMessage