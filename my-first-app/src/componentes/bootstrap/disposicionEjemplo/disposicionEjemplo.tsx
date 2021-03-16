import React from 'react'
import Card from './Card'
import daniel_image from './images/image-daniel.jpg'
import jeanette_image from './images/image-jeanette.jpg'
import jonathan_image from './images/image-jonathan.jpg'
import kira_image from './images/image-kira.jpg'
import patrick_image from './images/image-patrick.jpg'

const disposicionEjemplo = () => {

    return (
        
            <div className="d-flex justify-content-flex-end  align-items-stretch  h-40 parent-all-container border m-4 bg-secondary ">
             <div className='container '>
                <div className="row">
                   <div className="col-12 col-xl-9 ">
                      <div className="row" >
                         <div className="col-12 col-md-6 col-xl-8 contain  p-3">
                            <Card nombre='Daniel Clifford' urlImagen={daniel_image} cargo='Viceministro de Educacion' clase='bg-primary text-white' />
                         </div>
                         <div className="col-12 col-md-6 col-xl-4 contain  p-3">
                            <Card nombre='Jeantte Baez' urlImagen={jeanette_image} cargo='Viceministro de Recursos Interiores'
                               corto={true}
                               clase='bg-warning'
                            /> 
                         </div>
                         <div className="col-12 col-md-6 col-xl-4 contain  p-3">
                            <Card nombre='Kira Hernandez' urlImagen={kira_image} clase='bg-dander' cargo='Viceministro de Relaciones Internacionales' corto={true} />
                         </div>
                         <div className="col-12 col-md-6 col-xl-8 contain p-3">
                            <Card nombre='Jonathan Sanchez' urlImagen={jonathan_image} clase='bg-success text-white'
                               cargo='Viceministro de Hancienda'
                            />
                         </div>
                      </div>
                   </div>
                   <div className="col-12 col-xl-3 h-100 border brother p-3">
                      <Card nombre='Patrick Urbaez' urlImagen={patrick_image} clase='bg-info' cargo='Viceministro de Finanzas' />
                   </div>
                </div>
             </div>
          </div>
    )
}

export default disposicionEjemplo