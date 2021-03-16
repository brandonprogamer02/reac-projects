import React, { useState, useEffect } from 'react'
import { SelectMateria, InputCalificacion, TrMateriaPadre, BotonCerrarMateria } from './CuatrimestreStyled'
import ApiMaterias, { typeApiMateria } from '../../ApiMaterias'
import { IPropsMateria } from './types'
import { typeMateria } from '../../LocalStorage'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/maps/cuatrimestre.map'


const Materia = (props: IPropsMateria) => {
   const { indice, dataMateria, indiceCuatrimestre, deleteMateria, updateMateria, materiaRenderizado } = props

   const [selectMateria, setSelectMateria] = useState('');
   const [creditos, setCreditos] = useState(0);
   const [calificacion, setCalificacion] = useState(0)
   // const [materiaARenderizar, setMateriasARenderizar] = useState<typeApiMateria[]>([])

   useEffect(() => {
      const dataReal: typeMateria = { creditos, calificacion, nombre: selectMateria, id: dataMateria.id, indice }
      updateMateria(indiceCuatrimestre, indice, dataReal)
   }, [selectMateria, calificacion]);

   useEffect(() => {
      setSelectMateria(dataMateria.nombre)
      setCreditos(dataMateria.creditos)
      setCalificacion(dataMateria.calificacion)


   }, [dataMateria]);

   // useEffect(() => {
   //    const newState = ApiMaterias.filter(materia => {
   //       const retorno = materiaRenderizado.some(materia_ => materia.materia === materia_.nombre)
   //       if (retorno) return false
   //       else return true
   //    })
   //    console.log(newState)
   //    setMateriasARenderizar(newState)
   // }, [dataMateria])


   const handlerInputCalificacion = (value: string) => setCalificacion(Number(value));

   const handlerSelect = (value: string) => {
      // actualizamos el select con el valor qu nos llega del event
      setSelectMateria(value)
      // actualizamos el credito con el credito que es
      ApiMaterias.forEach(element => element.materia === value && setCreditos(element.creditos))
   };

   const handlerBorrarMateria = () => {
      const materia: typeMateria = { creditos, calificacion, nombre: selectMateria, id: dataMateria.id, indice }
      deleteMateria(indiceCuatrimestre, indice, materia)
   }

   return (
      <TrMateriaPadre>
         <td>
            <SelectMateria onChange={(event) => handlerSelect(event.currentTarget.value)}
               value={selectMateria}
            >
               {ApiMaterias.map((element, index) => {
                  return <option key={index} > {element.materia} </option>
               })}
            </SelectMateria>
         </td>
         <td>{creditos}</td>
         <td>
            <InputCalificacion placeholder='Nota' value={calificacion}
               onChange={(e) => handlerInputCalificacion(e.currentTarget.value)}
            />
            <BotonCerrarMateria onClick={handlerBorrarMateria} >X</BotonCerrarMateria>
         </td>
      </TrMateriaPadre>

   )
}

export default connect(mapStateToProps, mapDispatchToProps)(Materia)