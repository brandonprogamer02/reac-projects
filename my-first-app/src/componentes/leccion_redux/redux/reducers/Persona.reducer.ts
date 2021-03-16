import { PersonaMapStateToProps, PersonaAction } from "../types/Persona";
import { SETNOMBRE, SETNACIONALIDAD } from '../actions/Persona.actions'

const initialState: PersonaMapStateToProps = { nacionalidad: 'DOMINICANO', nombre: 'JUANCHO LOPEZ' }

const Persona = (state = initialState, action: PersonaAction) => {
   switch (action.type) {
      case SETNOMBRE:
         return { ...state, nombre: action.payload.nombre }
      case SETNACIONALIDAD:
         
         return { ...state, nacionalidad: action.payload.nacionalidad }

      default: return state;
   }

}
export default Persona