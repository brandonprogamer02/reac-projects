import React, { useRef } from 'react'
import { ProductosProps, ProductoContext } from '../redux/types/Productos'
import { connect } from 'react-redux'
import { productosMapDispatchToProps, productosMapStateToProps } from '../redux/map/Productos.map'
import ProductoLista from './ProductoLista'

export const ContextProductos = React.createContext<ProductoContext>();

const Productos = (props: ProductosProps) => {

   const inputRef = useRef<HTMLInputElement>(null);

   const handlerProducto = () => {
      if (inputRef.current?.value === undefined) throw new Error('')
      const value = inputRef.current?.value
      props.addProducto(value)
      inputRef.current.value = ''
      inputRef.current.focus()
   };

   const contextValue: ProductoContext = {
      deleteProducto: props.deleteProducto,
      listaProductos: props.stateProductos,
      updateProducto: props.updateProducto
   };

   return (
      <ContextProductos.Provider value={contextValue} >
         <div>
            Yo soy el Componente Productos cabron
            <input type="text" ref={inputRef} onKeyPress={(event) => event.key == 'Enter' && handlerProducto()} />
            <button onClick={handlerProducto} > Add</button>
            <ProductoLista />
            <h4>Espejo</h4>
            <ul>
               {props.stateProductos.map(producto => <li key={producto.id} >{producto.producto}</li>)}
            </ul>
         </div>
      </ContextProductos.Provider>
   )
}

export default connect(productosMapStateToProps, productosMapDispatchToProps)(Productos)