import React, { useEffect, useReducer, useState, useContext } from 'react'
import { connect } from 'react-redux'
import { DivParentContainer, DivTable, Button, DivTituloContainer, TableMaterias, LabelPromedioCuatrimestral, BotonCerrarCuatrimestre } from './CuatrimestreStyled'
import Materia from './Materia'
import { IPropsCuatrimestre } from './types'
import { typeMateria } from '../../LocalStorage'
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps/cuatrimestre.map'
import { generateId } from '../../utils'


const Cuatrimestre = (props: IPropsCuatrimestre) => {
   const { indice, deleteCuatrimestre, addMateria, cuatrimestres } = props
   const cuatrimestre = cuatrimestres[indice]
   const [promedioCuatrimestral, setPromedioCuatrimestral] = useState(0);

   useEffect(() => {
      calcularPromedio()
   });

   const _addMateria = () => {
      const nuevaMateria: typeMateria = { calificacion: 0, creditos: 0, nombre: '', id: generateId(), indice: 0 }
      addMateria(indice, nuevaMateria)
   };

   const calcularPromedio = () => {
      let notaParcial = 0;
      let cantidadCreditos = 0;
      cuatrimestre.forEach(elemento => {
         const { calificacion, creditos } = elemento;
         let notaVuelta = 0;
         if (calificacion >= 90) notaVuelta += 4;
         else if (calificacion >= 80) notaVuelta += 3;
         else if (calificacion >= 70) notaVuelta += 2;
         else notaVuelta += 1;
         const res = creditos * notaVuelta;
         notaParcial += res;
         cantidadCreditos += creditos;
      });

      const resultado = notaParcial / cantidadCreditos
      setPromedioCuatrimestral(Number(resultado.toFixed(2)))
   };

   const handlerEliminarCuatrimestre = () => {
      deleteCuatrimestre(indice)
   };

   return (
      <DivParentContainer>
         <DivTituloContainer>
            <label>Cuatrimestre {indice + 1}</label>
            <div>
               <Button onClick={_addMateria} className='badge  text-wrap '
               >Nueva Materia</Button>
               <BotonCerrarCuatrimestre onClick={handlerEliminarCuatrimestre} >X</BotonCerrarCuatrimestre>
            </div>
         </DivTituloContainer>
         <DivTable>
            <TableMaterias>
               <thead>
                  <tr>
                     <th>Materia</th>
                     <th>Creditos</th>
                     <th>Calificacion</th>
                  </tr>
               </thead>
               <tbody>
                  {cuatrimestre.map((element, index) => (<Materia indice={index} key={index} indiceCuatrimestre={indice} dataMateria={cuatrimestre[index]} />))}
               </tbody>
            </TableMaterias>
         </DivTable>
         <LabelPromedioCuatrimestral>Tu Promedio En este cuatrimestre fue es de {promedioCuatrimestral}</LabelPromedioCuatrimestral>

      </DivParentContainer>
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(Cuatrimestre) 