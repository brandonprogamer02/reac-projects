import React from 'react'

interface Props { corto?: boolean, nombre: string, cargo: string, urlImagen: string, clase?: string }

const Card = ({ corto, cargo, nombre, urlImagen, clase }: Props) => {

   const text = corto ? 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt' :
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, impedit perspiciatis voluptatibus autem blanditiis quasi pariatur dolore beatae aspernatur ipsa culpa velit at enim?'

   return (
      <div className={`card m-20 ${clase} h-100`}>
         <div className="card-body">
            <div className="d-flex flex-column text-align-center">
               <div className='d-flex '>
                  <img src={urlImagen} className='rounded-circle mr-5 ' />
                  <div className='d-flex  flex-column ' >
                     <label className='h6'>{nombre}</label>
                     <label className='fs-6'>{cargo}</label>
                  </div>
               </div>
               <div className='mt-3'>
                  <p className="h6 ">
                     {text}
                  </p>
                  <p className="fs-6">
                     {text}
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Card