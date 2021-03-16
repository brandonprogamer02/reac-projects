import { CounterMapStateToProps } from './Counter'
import { PersonaMapStateToProps } from './Persona'
import { ProductosMapStateToProps } from './Productos'

export interface IState {
   stateCount: CounterMapStateToProps,
   statePersona: PersonaMapStateToProps,
   stateProductos: ProductosMapStateToProps
}

