import React, { useEffect, useState } from 'react';
import { DivParentContainer, DivTable, Button, DivTituloContainer, TableMaterias, LabelPromedioCuatrimestral, BotonCerrarCuatrimestre } from './CuatrimestreStyled';
import Materia from './Materia';
import { IPropsCuatrimestre } from './types';
import { typeMateria } from '../../LocalStorage';
import { generateId } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../redux/types';
import { addMateria, deleteCuatrimestre } from '../../redux/actions/cuatrimestre.action';
import { borrarMateriaSeleccionado, nuevaMateriaSeleccionado } from '../../redux/actions/materiaSeleccionado.action';

const Cuatrimestre = (props: IPropsCuatrimestre) => {

   const dispatch = useDispatch();
   const cuatrimestre = useSelector((state: State) => state.cuatrimestres[props.indice]);
   const [promedioCuatrimestral, setPromedioCuatrimestral] = useState(0);

   useEffect(() => {
      calcularPromedio();
   });

   const _addMateria = () => {
      const nuevaMateria: typeMateria = { calificacion: 0, creditos: 0, nombre: '', id: generateId(), indice: 0 };
      dispatch(addMateria(props.indice, nuevaMateria));
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

      const resultado = notaParcial / cantidadCreditos;
      setPromedioCuatrimestral(Number(resultado.toFixed(2)))
   };

   const handlerEliminarCuatrimestre = () => {
      cuatrimestre.forEach(el => {
         console.log(el.nombre);
         if (el.nombre !== '') {
            dispatch(borrarMateriaSeleccionado({ creditos: el.creditos, materia: el.nombre }));
         }
      });
      dispatch(deleteCuatrimestre(props.indice));


   };

   return (
      <DivParentContainer>
         <DivTituloContainer>
            <label>Cuatrimestre {props.indice + 1}</label>
            <div>
               <Button onClick={_addMateria} className='badge  text-wrap '
               >Nueva Materia</Button>
               <BotonCerrarCuatrimestre onClick={handlerEliminarCuatrimestre}>X</BotonCerrarCuatrimestre>
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
                  {cuatrimestre.map((element, index) => (<Materia indice={index} key={index} indiceCuatrimestre={props.indice} dataMateria={cuatrimestre[index]} />))}
               </tbody>
            </TableMaterias>
         </DivTable>
         <LabelPromedioCuatrimestral>Tu Promedio En este cuatrimestre fue es de {promedioCuatrimestral}</LabelPromedioCuatrimestral>

      </DivParentContainer>
   )
}

export default Cuatrimestre;