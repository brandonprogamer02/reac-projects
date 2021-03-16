import React, { useContext, useEffect, useReducer, useState } from 'react'
import { IProps } from './types'
import useError from '../ErrorMessages/default'
import useErrorListaRespuestas from '../ErrorMessages/ListaRespuestas'
import { Button, Input } from '../../styledGlobal'
import { DivCabezera, DivCorrecta, DivListaRespuesta, DivParentAllContainer, DivPregunta, DivQuizProperties, DivRespuestas, DivTitulo } from './styledQuizProperties'
import { Quiz } from '../Quiz/types'
import { mapStateToProps, mapDispatchToProps } from '../../redux/map/mapeo'
import { connect } from 'react-redux'

const QuizProperties = ({ seleccionado, setTitulo, openDialog, updateQuiz, setRuta, proyectos, removeRespuesta, addRespuesta }: IProps) => {
   const dataQuizSeleccionado: Quiz = proyectos[seleccionado.proyecto] && proyectos[seleccionado.proyecto].quizzes[seleccionado.quiz]

   const titulo: string = proyectos[seleccionado.proyecto] && proyectos[seleccionado.proyecto].titulo

   // estados locales para renderizado que son derivados del estado global de redux
   const [pregunta, setPregunta] = useState('');
   const [listaRespuestas, setListasRespuestas] = useState<string[] | null>(null);
   const [correcta, setCorrecta] = useState('');
   const [ignore, forceUpdate] = useReducer(x => x + 1, 0)
   // hooks personalizados para los errores, validaciones y mensajes de error
   const [errorTitulo, errorTituloIsValidate, errorTituloForceValidation] = useError(titulo)
   const [errorPregunta, errorPreguntaIsValidate, errorPreguntaForceValidation] = useError(pregunta)
   const [errorListaRespuestas, errorListaRespuestasIsValidate, errorListaRespuestasForceValidation] = useErrorListaRespuestas(listaRespuestas === null ? 0 : listaRespuestas.length)

   // esta variable es porque el efecto esta pendiente a los estado locales que pueden ser cambiados desde el efecto
   // por default y cuando se usa algun input, entonces el esta ahi para que solo lanze la action en redux cuando venga de un cambio
   // de un input
   const [isChangeQuizSeleccionado, setIsChangeQuizSeleccionado] = useState(false)

   useEffect(() => {
      if (dataQuizSeleccionado !== undefined) {

         setIsChangeQuizSeleccionado(false)
         const { correcta, respuestas, pregunta } = dataQuizSeleccionado
         setPregunta(pregunta)
         setListasRespuestas(respuestas)
         setCorrecta(correcta)
      }
   });

   useEffect(() => {
      if (listaRespuestas !== null && isChangeQuizSeleccionado) {
         const indiceQuizSeleccionado: number = seleccionado.quiz
         const quiz: Quiz = { correcta, pregunta, respuestas: listaRespuestas }
         updateQuiz(indiceQuizSeleccionado, quiz)
      }

   }, [pregunta, listaRespuestas, correcta]);


   const handlerRespuesta = (value: string, index: number) => {
      if (listaRespuestas === null) throw new Error('')
      let newListaRespuestas = [...listaRespuestas]
      newListaRespuestas[index] = value
      setListasRespuestas(newListaRespuestas)
   };

   const handlerCorrecta = (value: string) => setCorrecta(value);

   const finalizar = () => {
      errorTituloForceValidation()
      errorPreguntaForceValidation()
      errorListaRespuestasForceValidation()
      if (errorPreguntaIsValidate && errorListaRespuestasIsValidate && errorTituloIsValidate) {
         setRuta('/')
      }
   }

   return (
      <DivParentAllContainer>
         <DivCabezera>
            <label>Herramientas</label>
            <DivTitulo>
               <label>Titulo del Quiz</label>
               <Input type="text" value={titulo} onChange={(e) => {
                  const newTitle = e.currentTarget.value
                  setTitulo(seleccionado.proyecto, newTitle)
               }} />
               {errorTitulo}
            </DivTitulo>
            <div>
               <Button styles='font-size:small;'
                  onClick={() => openDialog()}>
                  + Quiz
               </Button>
               <Button styles='font-size:small;' onClick={finalizar} >Save</Button>
            </div>
         </DivCabezera>

         <DivQuizProperties>
            <DivPregunta>
               <label>Pregunta</label>
               <Input type="text" placeholder='Escribe aqui la pregunta...' value={pregunta}
                  onChange={(event) => {
                     setIsChangeQuizSeleccionado(true)
                     setPregunta(event.currentTarget.value)
                  }}
               />
               {errorPregunta}
            </DivPregunta>
            <DivRespuestas>
               <label>Respuestas</label>
               <Button
                  styles={`padding:5px 10px; font-size: small;`}
                  onClick={() => addRespuesta('Respuesta en blanco')}
               >+</Button>
               <DivListaRespuesta>
                  {listaRespuestas !== null && (listaRespuestas.map((respuesta, index) => (
                     <li key={index}>
                        <input type="text" value={respuesta} onChange={event => {
                           setIsChangeQuizSeleccionado(true)
                           handlerRespuesta(event.currentTarget.value, index)
                        }} />
                        <button onClick={() => removeRespuesta(index)} >X</button>
                     </li>
                  )))}
               </DivListaRespuesta>
               {errorListaRespuestas}
            </DivRespuestas>
            <DivCorrecta>
               <label>Respuesta Correcta</label>
               <select value={correcta} onChange={(e) => {
                  setIsChangeQuizSeleccionado(true)
                  handlerCorrecta(e.currentTarget.value)
               }}>
                  {listaRespuestas !== null && (listaRespuestas.map((respuesta, index) => (<option key={index}>{respuesta}</option>)))}
               </select>
            </DivCorrecta>
         </DivQuizProperties>


      </DivParentAllContainer>
   );

}

export default connect(mapStateToProps, mapDispatchToProps)(QuizProperties)