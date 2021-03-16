import React from 'react'
import { connect } from 'react-redux'
import { mapDispatchToProps, mapStateToProps } from '../redux/map/Persona.map'
import { PersonaProps } from '../redux/types/Persona'

const Persona = (props: PersonaProps) => {

   const handlerNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
      
      const nombre = event.currentTarget.value
      props.setNombre(nombre)
   };
   
   const handlerNacionalidad = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nacionalidad = event.currentTarget.value
      
      props.setNacionalidad(nacionalidad)
   };

   return (
      <div>
         <label>Nombre: </label> <input onChange={handlerNombre} />
         <label>Nacionalidad </label> <input onChange={handlerNacionalidad} />
         <br />
         <label>Nombre: {props.nombre} </label>
         <label>Nacionalidad: {props.nacionalidad} </label>
      </div>
   )
}

export default connect(mapStateToProps, mapDispatchToProps)(Persona)