import { typeMateria } from '../../LocalStorage'
import { CuatrimestreMapStateToProps, CuatrimestreMapDispatchToProps } from '../../redux/types/cuatrimestre'
import {Props} from '../../redux/types/generalTypes'

export interface IPropsMateria extends Props { indice: number, dataMateria: typeMateria, indiceCuatrimestre: number }

export interface IPropsCuatrimestre extends CuatrimestreMapStateToProps, CuatrimestreMapDispatchToProps{
   indice: number
}
