import React from 'react'
import image from './check.png'

import { DivParentAllContainer, DivRespuestaCorrecta, DivSeleccion, LabelNumeroPregunta, LabelPregunta, LiRespuesta } from './styledQuiz'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/map/mapeo'
import { IProps } from './types'

const Quiz = ({ count, correcta, pregunta, respuestas, setQuizSeleccionado }: IProps) => {

   const data = { correcta, pregunta, respuestas, count }
 
   const handlerClickCheck = (event: React.MouseEvent) => {
      (event.currentTarget.children[0] as HTMLInputElement).checked = true
   };
   const handlerClickQuiz = () => {
      if(count === undefined) throw new Error('')
      setQuizSeleccionado(count, data)
   };

   return (
      <DivParentAllContainer onClick={handlerClickQuiz}>
         <LabelNumeroPregunta>PREGUNTA NUMERO {count && count}</LabelNumeroPregunta>
         <LabelPregunta >{pregunta}</LabelPregunta>
         <DivSeleccion>
            {respuestas.map((res, index) =>
               <LiRespuesta key={index} onClick={handlerClickCheck}  >
                  <input type="radio" name="seleccion" />
                  <label>{res}</label>
               </LiRespuesta>
            )}
         </DivSeleccion>
         <DivRespuestaCorrecta>
            <img src={image} alt="check-icon" />
            <span>La Respuesta correcta es: {correcta}</span>
         </DivRespuestaCorrecta>
      </DivParentAllContainer>
   );

}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)