import { ProductosAction } from '../types/Productos'
import { getId } from '../../utils'

export const ADD_PRODUCTO = 'ADD_PRODUCTO'
export const DELETE_PRODUCTO = 'DELETE_PRODUCTO'
export const UPDATE_PRODUCTO = 'UPDATE_PRODUCTO'


export const addProducto = (producto: string): ProductosAction => ({
   type: ADD_PRODUCTO,
   payload: {
      id: getId(),
      producto
   }
})

export const deleteProducto = (id: string, producto: string): ProductosAction => ({
   type: DELETE_PRODUCTO,
   payload: {
      id,
      producto
   }
})

export const updateProducto = (id: string, producto: string): ProductosAction => ({
   type: UPDATE_PRODUCTO,
   payload: {
      id,
      producto
   }
})


