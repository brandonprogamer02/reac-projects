import React, { useContext } from 'react'
import { ProductoProps } from '../redux/types/Productos'
import { ContextProductos } from './Productos'



const Producto = ({ text, id }: ProductoProps) => {
   const { deleteProducto, updateProducto } = useContext(ContextProductos)

   const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const productoValue = event.currentTarget.value
      updateProducto(id, productoValue)
   }

   return (
      <li>
         <input type="text"
            value={text}
            onChange={handlerInput}
         />
         <button onClick={() => deleteProducto(id, text)} >X</button>
      </li>
   )
}

export default Producto