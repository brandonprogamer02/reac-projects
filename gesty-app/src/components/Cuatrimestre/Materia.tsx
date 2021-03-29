import React, { useState, useEffect } from 'react'
import { SelectMateria, InputCalificacion, TrMateriaPadre, BotonCerrarMateria } from './CuatrimestreStyled'
import ApiMaterias, { typeApiMateria } from '../../ApiMaterias';
import { IPropsMateria } from './types';
import { typeMateria } from '../../LocalStorage';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMateria, updateMateria } from '../../redux/actions/cuatrimestre.action';
import { State } from '../../redux/types';
import { nuevaMateriaSeleccionado, updateMateriaSeleccionado } from '../../redux/actions/materiaSeleccionado.action';


const Materia = (props: IPropsMateria) => {
   const { dataMateria, indice, indiceCuatrimestre } = props
   const materiaRenderizado = useSelector((state: State) => state.materiaRenderizado);
   const dispatch = useDispatch();
   const [selectMateria, setSelectMateria] = useState('');
   const [creditos, setCreditos] = useState(0);
   const [calificacion, setCalificacion] = useState(0);

   useEffect(() => {
      setSelectMateria(dataMateria.nombre);
      setCreditos(dataMateria.creditos);
      setCalificacion(dataMateria.calificacion);
   }, [dataMateria]);


   const handlerSelect = (value: string) => {
      // actualizamos el select con el valor qu nos llega del event
      dispatch(updateMateriaSeleccionado({ creditos: 0, materia: selectMateria }, { creditos: 0, materia: value }));
      setSelectMateria(value);
      // actualizamos el credito con el credito que es
      ApiMaterias.forEach(element => element.materia === value && setCreditos(element.creditos));
      // add the subject in the state corresponding
      // getting the credits
      const f = ApiMaterias.filter(el => el.materia === value);
      const dataReal: typeMateria = { creditos: f[0].creditos, calificacion, nombre: value, id: dataMateria.id, indice };
      dispatch(updateMateria(indiceCuatrimestre, indice, dataReal));

   };

   const handlerInputCalificacion = (value: string) => {
      setCalificacion(Number(value));
      const f = ApiMaterias.filter(el => el.materia === dataMateria.nombre);
      const dataReal: typeMateria = { creditos: f[0].creditos, calificacion: Number(value), nombre: dataMateria.nombre, id: dataMateria.id, indice };
      dispatch(updateMateria(indiceCuatrimestre, indice, dataReal));
   };

   const handlerBorrarMateria = () => {
      console.log('F' + selectMateria + 'F');
      if (selectMateria !== 'Selecciona Tu Materia' && selectMateria !== '') {
         const materia: typeMateria = { creditos, calificacion, nombre: selectMateria, id: dataMateria.id, indice };
         dispatch(deleteMateria(indiceCuatrimestre, indice, materia));
      }
   }

   return (
      <TrMateriaPadre>
         <td>
            <SelectMateria onChange={event => handlerSelect(event.currentTarget.value)} value={selectMateria}
            >
               {selectMateria !== '' && <option> {selectMateria} </option>}

               {materiaRenderizado.map((element: typeApiMateria, index: number) => {
                  return <option key={index} > {element.materia} </option>
               })}

            </SelectMateria>
         </td>
         <td>{creditos}</td>
         <td style={{ position: 'relative' }}>
            <InputCalificacion placeholder='Nota' value={calificacion}
               onChange={(e) => handlerInputCalificacion(e.currentTarget.value)}
            />
            <BotonCerrarMateria onClick={handlerBorrarMateria} >X</BotonCerrarMateria>
         </td>
      </TrMateriaPadre>

   )
}

export default Materia;