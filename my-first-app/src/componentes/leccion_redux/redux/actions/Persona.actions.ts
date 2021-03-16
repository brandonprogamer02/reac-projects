export const SETNOMBRE = 'SETNOMBRE'
export const SETNACIONALIDAD = 'SETNACIONALIDAD'

export const setNombre = (nombre: string) => {
   
   const f = {
      type: SETNOMBRE, payload: {
         nombre
      }
   }
   return f
}

export const setNacionalidad = (nacionalidad: string) => {
   const f = {
      type: SETNACIONALIDAD, payload: {
         nacionalidad
      }
   }
   return f
}
