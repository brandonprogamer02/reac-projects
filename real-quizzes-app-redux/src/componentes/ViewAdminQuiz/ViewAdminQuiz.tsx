import React, { useEffect, useReducer, useState } from 'react'
import DialogoNuevoQuiz from '../DialogoNuevoQuiz/DialogoNuevoQuiz'
import { Quiz as QuizType } from '../Quiz/types'
import Quiz from '../Quiz/Quiz'
import QuizProperties from '../QuizProperties/QuizProperties'
import { IContext } from './types'
import { connect } from 'react-redux'
import { DivParentAllContainer, DivMainContainer, DivQuizContainer } from './styledViewAdminQuiz'
import { H1TituloAplicacion, Button } from '../../styledGlobal'
import { mapStateToProps, mapDispatchToProps } from '../../redux/map/mapeo'
import { IProps } from '../../redux/types/global'

function ViewAdminQuiz({ proyectos, seleccionado, addQuiz, setRuta }: IProps) {

   const [mostrarDialogoNuevoQuiz, setMostrarDialogoNuevoQuiz] = useState(false);
   const [quizzes, setQuizzes] = useState<QuizType[]>([])
   const [ignore, forceUpdate] = useReducer(i => i + 1, 0);

   useEffect(() => {
      const dataQuizzesProyectoSeleccionado = proyectos[seleccionado.proyecto].quizzes
      setQuizzes(dataQuizzesProyectoSeleccionado)
   })
  

   const cerrarDialogo = () => setMostrarDialogoNuevoQuiz(false);

   const _addQuiz = (pregunta: string, respuestas: string[], correcta: string) => {
      // condicional para la primera vez que el estado tiene una insercion de inicializacion
      const quiz = { pregunta, respuestas, correcta }
      addQuiz(quiz)
   };

   const openDialog = () => setMostrarDialogoNuevoQuiz(true);
   return (
      <DivParentAllContainer>
         <H1TituloAplicacion>Quizzes App - Brandox</H1TituloAplicacion>
         <h3 >
            <span>Administrar Quizzes</span>
            <Button styles={`
                  font-size:small;
                  position:absolute;
                  right: 0px;
                  margin-top: -4px;
               `} onClick={() => { setRuta('/') }} >🏩 Volver al Inicio</Button>
         </h3>
         <DivMainContainer >
            <DivQuizContainer>
               {true && (
                  quizzes.map((quiz, index) =>
                     <div key={index}>
                        <Quiz pregunta={quiz.pregunta} respuestas={quiz.respuestas} correcta={quiz.correcta} count={index} />
                     </div>
                  ))}
            </DivQuizContainer>
            <QuizProperties openDialog={openDialog} />
         </DivMainContainer>
         {/* MOSTRANDO EL DIALOGO CUANDO SE HAGA CLICK EN EL BOTON CORESPONDIENTE */}
         {mostrarDialogoNuevoQuiz &&
            <DialogoNuevoQuiz closeDialog={cerrarDialogo} addQuiz={_addQuiz} />}
      </DivParentAllContainer>
   )

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAdminQuiz)