import { Producto, ProductosDispatch, ProductosMapDispatchToProps, ProductosMapStateToProps } from '../types/Productos'
import { IState } from '../types/Redux'
import { addProducto, deleteProducto,updateProducto } from '../actions/Productos.action'

export const productosMapStateToProps = (state: IState) => {
   return { stateProductos: state.stateProductos }
}

export const productosMapDispatchToProps = (dispatch: ProductosDispatch): ProductosMapDispatchToProps => {
   return {
      addProducto: (producto: string) => dispatch(addProducto(producto)),
      deleteProducto: (id: string, producto: string) => dispatch(deleteProducto(id, producto)),
      updateProducto: (id: string, producto: string) => dispatch(updateProducto(id, producto))
   }
}
