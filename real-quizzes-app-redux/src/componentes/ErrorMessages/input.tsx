import React, { useEffect, useState, useReducer, RefObject } from 'react'
import { StyledComponent } from 'styled-components';
import { DivErrorMessage } from './styledErrorMessages'

type typeInputStyled = StyledComponent<"input", any, {}, never>


const useErrorMessageInput = (refInput: RefObject<HTMLInputElement>) => {
   // ESTADOS
   const [isValidate, setIsValidate] = useState(false);
   const [message, setMessage] = useState('');
   const [countVecesRender, incrementCountVecesRender] = useReducer(x => x + 1, 0)
   const [change, forceUpdate] = useReducer(x => x + 1, 0)

   let value = refInput.current?.value === undefined ? '' : refInput.current?.value

   const forceShowError = () => {
      incrementCountVecesRender()
      forceUpdate()
      setIsValidate(false)
   }
   useEffect(() => {
      incrementCountVecesRender()
      if (value !== undefined) {
         if (countVecesRender > 2) {
            let color = ''
            refInput.current?.classList.forEach((clase: string) => refInput.current?.classList.remove(clase))
            setIsValidate(false)
            if (value?.trim() === '') {
               setMessage('No puedes dejar el campo vacio')
               color = 'red'
            } else if (value?.length <= 5) {
               color = 'red'
               setMessage('Debes introducir mas de 5 caracteres')
            }
            else {
               color = 'green';
               setIsValidate(true);
            }

            if (refInput.current) {
               refInput.current.style.boxShadow = `0px 0px 10px 5px ${color}`
               refInput.current.style.border = '0px'
            }
         }
      }
   }, [value, change]);

   // antes de pintar el mensaje valida que no sea la primera vez que se llama y luego que isValidate es falso
   const marcado = countVecesRender > 2 ? (isValidate ? <></> : (<DivErrorMessage> <span>{message}</span> </DivErrorMessage>)) : <></>
   const res: [JSX.Element, boolean, () => void] = [marcado, isValidate, forceShowError];
   return res
};

export default useErrorMessageInput

