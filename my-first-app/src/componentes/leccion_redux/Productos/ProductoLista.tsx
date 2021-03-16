import React, { useContext } from 'react'
import { ProductoListaProps } from '../redux/types/Productos'
import Producto from '../Productos/Producto'
import { ContextProductos } from './Productos'

const ProductoLista = ({ }: ProductoListaProps) => {
   const { listaProductos } = useContext(ContextProductos)

   return (<ul>
      {listaProductos.map(element => {
         if (element.id === undefined) throw new Error('')
         return (<Producto
            key={element.id}
            id={element.id}
            text={element.producto}
         />)
      })}
   </ul>)
}

export default ProductoLista