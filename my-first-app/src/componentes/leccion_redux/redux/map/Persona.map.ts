import { IState } from "../types/Redux"
import { PersonaDispatch, PersonaMapDispatchToProps, PersonaMapStateToProps } from "../types/Persona"
import { setNacionalidad, setNombre } from '../actions/Persona.actions'


export const mapStateToProps = (state: IState): PersonaMapStateToProps => {
   return state.statePersona
}

export const mapDispatchToProps = (dispatch: PersonaDispatch): PersonaMapDispatchToProps => {
   return ({
      setNombre: (nombre: string) => dispatch(setNombre(nombre)),
      setNacionalidad: (nacionalidad: string) => dispatch(setNacionalidad(nacionalidad))
   })
}
