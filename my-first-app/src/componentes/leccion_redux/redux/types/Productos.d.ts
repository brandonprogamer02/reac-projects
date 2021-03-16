

export interface Producto {
   producto: string,
   id: string
}

export interface ProductoProps {
   text: string,
   id: string,
}

export interface ProductoListaProps {

}

export interface ProductoContext {
   listaProductos: ProductosMapStateToProps , 
   deleteProducto: (id: string, producto: string) => void,
   updateProducto: (id: string, producto: string) => void
}

export type ProductosMapStateToProps = Array<Producto>

export interface ProductosMapDispatchToProps {
   addProducto: (producto: string) => void,
   deleteProducto: (id: string, producto: string) => void,
   updateProducto: (id: string, producto: string) => void
}

export interface ProductosProps extends ProductosMapDispatchToProps { stateProductos: ProductosMapStateToProps }

export interface ProductosAction {
   type: string,
   payload: {
      producto?: string,
      id?: string
   }
}

export type ProductosDispatch = (arg0: ProductosAction) => void