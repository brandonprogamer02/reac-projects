export interface PersonaMapStateToProps {
   nombre: string,
   nacionalidad: string
}
export interface PersonaMapDispatchToProps {
   setNombre: (nombre: string) => void,
   setNacionalidad: (nacionalidad: string) => void,
}

export interface PersonaProps extends PersonaMapStateToProps, PersonaMapDispatchToProps { }

export interface PersonaAction {
   type: string,
   payload: {
      nombre?: string,
      nacionalidad?: string
   }
}

export type PersonaDispatch = (arg0: PersonaAction) => void