import React, { useEffect, useReducer, useState } from 'react'
import {DivErrorMessage} from './styledErrorMessages'

const useErrorMessageListaRespuestas = (numElements: number) => {
   const [isValidate, setIsValidate] = useState(false);
   const mensaje = 'DEBES TENER MINIMO CUATRO RESPUESTAS'
   // este estado es para cuando se forza mostrar/ validar error, es decir para que pueda validar los cambioscountVecesRendercountVecesRender
   const [change, forceUpdate] = useReducer(x => x + 1, 0)
   // este estado es para que no se renderize la primera vez que se llama
   const [countVecesRender, incrementCountVecesRender] = useReducer(x => x + 1, 0)
   // este metodo es para que se force el mostrar el error y validacion
   const forceShowError = () => {
      incrementCountVecesRender()
      forceUpdate()
   };
   
   const validaciones = () => {
      if (numElements < 4) setIsValidate(false)
      else setIsValidate(true)
   }
   useEffect(() => {
      incrementCountVecesRender()
      validaciones()
   }, [numElements, change]);

   // validacion con cantidad veces renderizados para que no no valida la primera vez 
   const marcado = countVecesRender > 2 ? (isValidate ? <></> : (<DivErrorMessage bg='#C5BC49'  ><span>{mensaje}</span></DivErrorMessage>)) : <></>;
   const res: [JSX.Element, boolean, () => void] = [marcado, isValidate, forceShowError];
   return res
}
export default useErrorMessageListaRespuestas