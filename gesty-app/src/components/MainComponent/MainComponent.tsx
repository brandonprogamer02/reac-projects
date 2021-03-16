import React, { useState, useEffect, useReducer } from 'react'
import Cuatrimestre from '../Cuatrimestre/Cuatrimestre'
import { DivMainContainer, DivParentContainer, DivCuatrimestres, LabelPromedioHistorico, ButtonNuevoCuatrimestre, Titulo, GlobalStyles } from './MainComponentStyled'
import { typeDataCuatrimestre } from '../../LocalStorage'
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps/cuatrimestre.map'
import { connect } from 'react-redux'
import { Props } from '../../redux/types/generalTypes'
import { getLocalStorage } from '../../LocalStorage'

const MainComponent = (props: Props) => {
   const { addCuatrimestre, cuatrimestres, replaceCuatrimestres } = props
   const [promedioHistorico, setPromedioHistorico] = useState(0)

   useEffect(() => setPromedioHistorico(getPromedioHistorico()))

   useEffect(() => {
      // aqui cargamos la data del local storage
      const data = getLocalStorage().cuatrimestres
      replaceCuatrimestres(data ? data : [[]])
   }, [])

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
      const resultado = notaParcial / cantidadCreditos
      return Number(resultado.toFixed(2))
   };

   const nuevoCuatrimestre = () => {
      const newCuatrimestre: typeDataCuatrimestre = []
      addCuatrimestre(newCuatrimestre)
   }


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

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)