import React, { useEffect, useState, useContext, useReducer } from 'react'
import { getLocalStorage, typeDataProyecto } from '../../LocalStorage'
// import { contextBackground } from '../Background/Background'
import { H1TituloAplicacion, Button } from '../../styledGlobal'
import { DivBotonera, DivParentAllContainer, DivQuizzes, FooterPayola, LiCuestionarioSeleccionado, DivContenido } from './styledViewSeleccionProyectos'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../../redux/map/mapeo'
import { IProps } from '../../redux/types/global'

const ViewSeleccionProyectos = (
   { seleccionado, setProyectoSeleccionado, addNewProject, proyectos, setRuta,removeProject }: IProps) => {

   const [ignore, forceUpdate] = useReducer(x => x + 1, 0);

   useEffect(() => setProyectoSeleccionado(-1), []);

   const handlerClick = (index: number) => {
      setProyectoSeleccionado(index)
      forceUpdate()
   };

   const handlerEditarQuiz = () => {
      if (seleccionado.proyecto === -1) alert('debes seleccionar un quizz')
      else setRuta('/adminquiz')
   };

   const handlerAddNewProject = () => {
      const newProject: typeDataProyecto = { quizzes: [], titulo: 'Nuevo Cuestionario en blanco' }
      addNewProject(newProject)
   };

   const handlerDeleteProject = () => {
      if (seleccionado.proyecto === -1) alert('debes seleccionar un quizz')
      else removeProject(seleccionado.proyecto)
      
   };

   return (
      <DivParentAllContainer>
         <DivContenido>
            <H1TituloAplicacion>Quizzes App - Brandox</H1TituloAplicacion>
            <h2>Mis Quizzes</h2>
            <DivQuizzes >
               <hr />
               {proyectos.map((element, index) => (
                  <LiCuestionarioSeleccionado
                     key={index} onClick={() => handlerClick(index)}
                     seleccionado={index === seleccionado.proyecto}
                  >
                     {element.titulo}
                  </LiCuestionarioSeleccionado>
               ))}
            </DivQuizzes>
            <hr />
            <DivBotonera>
               <Button onClick={handlerEditarQuiz}
               >Editar Quiz</Button>
               <Button >Probar Quiz</Button>
               <Button onClick={handlerAddNewProject} >Add Quiz</Button>
               <Button onClick={handlerDeleteProject}>Borrar Quiz</Button>
            </DivBotonera>
         </DivContenido>
         <FooterPayola> Aplication Made With ♡ By Brandox </FooterPayola>
      </DivParentAllContainer>

   )
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewSeleccionProyectos)