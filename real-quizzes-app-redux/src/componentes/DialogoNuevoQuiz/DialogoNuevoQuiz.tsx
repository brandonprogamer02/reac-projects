
import React, { useState, useRef, useEffect } from 'react'
import useErrorMessageInput from '../ErrorMessages/input'
import useErrorMessage from '../ErrorMessages/default'
import useErrorMessageListaRespuestas from '../ErrorMessages/ListaRespuestas'
import { IProps } from './types'
import { Dialog } from './styledDialogoNuevoQuiz'
import { Button } from '../../styledGlobal'

const DialogoNuevoQuiz = ({ closeDialog, addQuiz }: IProps) => {
   // REFS
   const dialogo = useRef<HTMLDialogElement>(null);
   const inputRespuesta = useRef<HTMLInputElement>(null);
   const inputPregunta = useRef<HTMLInputElement>(null);
   // STATES
   const [respuestas, setRespuestas] = useState<string[]>([]);
   const [contador, setContador] = useState(1);
   const [correcta, setCorrecta] = useState('');
   const [pregunta, setPregunta] = useState(' ');
   const [respuesta, setRespuesta] = useState('');

   //errores
   const [inputPreguntaError, inputPreguntaIsValidate, inputPreguntaForceShowError] = useErrorMessageInput(inputPregunta);
   const [inputRespuestaError, inputRespuestaIsValidate] = useErrorMessage(respuesta);
   const [listaRespuestasError, listaRespuestasIsValidate, listaRespuestaForceShowError] = useErrorMessageListaRespuestas(respuestas.length);

   const manejadorSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.currentTarget.value
      setCorrecta(value)
   };

   const addRespuesta = () => {
      if (inputRespuestaIsValidate) {
         let respuesta = inputRespuesta.current?.value
         setContador(contador + 1)
         if (respuesta != null) {
            setRespuestas([...respuestas, respuesta])
            if (inputRespuesta.current) inputRespuesta.current.value = ''
         }
      }
   };

   const cerrar = () => {
      dialogo.current?.close(); closeDialog()
   };

   const forceShowError = () => {
      inputPreguntaForceShowError()
      listaRespuestaForceShowError()
   }
   const finalizar = () => {
      // esta validacion es por si el usuario no ha elegido ninguna respuesta que por defecto tome la primera
      const correctaR = correcta === '' ? respuestas[0] : correcta
      forceShowError()
      if (listaRespuestasIsValidate && inputPreguntaIsValidate) {
         const pregunta = inputPregunta.current?.value
         if (pregunta == null) throw new Error('element not found')
         addQuiz(pregunta, respuestas, correctaR)
         cerrar()
      }
   };
   useEffect(() => {
      dialogo.current?.showModal()
   }, []);
   const handlerKey = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPregunta(event.currentTarget.value)
   }
   


   return (
      <Dialog ref={dialogo}>
         <h3 className='titulo'>
            Creando nueva Pregunta
            <button onClick={cerrar} className='boton-cerrar'>X</button>
         </h3> <hr />
         <div >
            <span >Escribe la pregunta: </span>
            <input ref={inputPregunta} type="text" placeholder='Aqui va el titulo de la pregunta...'
               onChange={(event) => handlerKey(event)} value={pregunta}
            />{inputPreguntaError}
         </div>
         <div>
            <label>Selecciona la Respuesta correcta</label>
            <select onChange={manejadorSelect} name='correcta' value={correcta}>
               {respuestas.map((res, index) => (
                  <option key={index} >{res}</option>
               ))}
            </select>
         </div>
         <hr />
         <div className='li-respuestas'>
            {respuestas.length === 0 ? 'DEBES ANADIR RESPUESTAS' : (
               respuestas.map((element, index) => <li key={index + element}>{element}</li>)
            )}
         </div>
         <hr />
         <div>
            <input
               type="text" placeholder='Ingresa nueva respuesta' ref={inputRespuesta} onChange={(event) => setRespuesta(event.currentTarget.value)}
               onKeyPress={(e) => e.key === 'Enter' && addRespuesta()}
            />
            <Button styles={' background-color: white; color:teal; font-size:small;'} onClick={addRespuesta} >Add Respuesta</Button>
            {inputRespuestaError}
            {listaRespuestasError}
         </div>
         <hr />
         <Button styles={' background-color: white; color:teal; font-size:small; '} onClick={finalizar} >Finalizar</Button>
      </Dialog>
   )
}
export default DialogoNuevoQuiz;