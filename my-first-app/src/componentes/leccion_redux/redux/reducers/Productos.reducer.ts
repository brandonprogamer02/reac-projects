import { ProductosMapStateToProps, ProductosAction, Producto } from '../types/Productos'
import { ADD_PRODUCTO, DELETE_PRODUCTO, UPDATE_PRODUCTO } from '../actions/Productos.action'
import { getId } from '../../utils'

const initialState: ProductosMapStateToProps = [
   { id: getId(), producto: 'Ongito Wa' },
   { id: getId(), producto: 'Rochy Rd' }
]

const Productos = (state = initialState, action: ProductosAction) => {

   switch (action.type) {
      case ADD_PRODUCTO:
         if (action.payload.producto === undefined) throw new Error('')
         if (action.payload.id === undefined) throw new Error('')
         const newProductos1: ProductosMapStateToProps = [...state, {
            producto: action.payload.producto,
            id: action.payload.id
         }]
         return newProductos1
      case DELETE_PRODUCTO:
         const newProductos2: ProductosMapStateToProps = state.filter(producto => producto.id !== action.payload.id)
         return newProductos2
      case UPDATE_PRODUCTO:
         if (action.payload.producto === undefined) throw new Error('')
         if (action.payload.id === undefined) throw new Error('')
         const data = { producto: action.payload.producto, id: action.payload.id }
         const newProductos3: ProductosMapStateToProps = state.map(producto => producto.id === data.id ? data : producto)
         return newProductos3

      default: return state
   }

}

export default Productos