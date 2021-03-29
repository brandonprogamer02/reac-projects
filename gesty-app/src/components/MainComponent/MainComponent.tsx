import React, { useState, useEffect } from 'react';
import Cuatrimestre from '../Cuatrimestre/Cuatrimestre';
import { DivMainContainer, DivParentContainer, DivCuatrimestres, LabelPromedioHistorico, ButtonNuevoCuatrimestre, Titulo, GlobalStyles } from './MainComponentStyled';
import { typeDataCuatrimestre } from '../../LocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { getLocalStorage } from '../../LocalStorage';
import { } from '../../redux/actions/materiaSeleccionado.action';
import { addCuatrimestre, replaceCuatrimestres } from '../../redux/actions/cuatrimestre.action';
import { replaceMateriaSeleccionado } from '../../redux/actions/materiaSeleccionado.action';
import { State } from '../../redux/types';
import apiMateria from '../../ApiMaterias';

const MainComponent = () => {
   const dispatch = useDispatch();
   const cuatrimestres = useSelector((state: State) => state.cuatrimestres);
   const [promedioHistorico, setPromedioHistorico] = useState(0);

   useEffect(() => setPromedioHistorico(getPromedioHistorico()));

   useEffect(() => {
      // aqui cargamos la data del local storage
      const cuatrimestresData = getLocalStorage().cuatrimestres;
      const materiaRenderizado = getLocalStorage().materiaRenderizado;

      cuatrimestresData && dispatch(replaceCuatrimestres(cuatrimestresData));
      materiaRenderizado.length !== 0 && dispatch(replaceMateriaSeleccionado(materiaRenderizado));


   }, []);

   const getPromedioHistorico = () => {
      let notaParcial = 0;
      let cantidadCreditos = 0;
      cuatrimestres.forEach(cuatrimestre => {
         cuatrimestre.forEach(materia => {
            let notaVuelta = 0;
            if (materia.calificacion >= 90) notaVuelta += 4;
            else if (materia.calificacion >= 80) notaVuelta += 3;
            else if (materia.calificacion >= 70) notaVuelta += 2;
            else notaVuelta += 1;
            const res = materia.creditos * notaVuelta;
            notaParcial += res;
            cantidadCreditos += materia.creditos;
         })
      })
      const resultado = notaParcial / cantidadCreditos;
      return Number(resultado.toFixed(2));
   };

   const nuevoCuatrimestre = () => {
      const newCuatrimestre: typeDataCuatrimestre = []
      dispatch(addCuatrimestre(newCuatrimestre));
   };

   return (
      <DivParentContainer>
         <div className="container-fluid  vh-100 d-flex">
            <GlobalStyles />
            <DivMainContainer>
               <Titulo>Gesty App - Brandox</Titulo>
               <DivCuatrimestres>
                  {cuatrimestres.map((element, index) => (
                     <Cuatrimestre key={index} indice={index} />
                  ))}
                  <ButtonNuevoCuatrimestre onClick={nuevoCuatrimestre} >
                     + <br />Nuevo Cuatrimestre
               </ButtonNuevoCuatrimestre>
               </DivCuatrimestres>
               <LabelPromedioHistorico> Tu Promedio Historico es de {promedioHistorico} </LabelPromedioHistorico>
            </DivMainContainer>
         </div>
      </DivParentContainer>
   )
}

export default MainComponent;