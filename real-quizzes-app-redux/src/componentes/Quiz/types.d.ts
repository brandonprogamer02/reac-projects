import { IProps } from '../../redux/types/global'

export interface IProps extends IProps , Quiz {  }

export interface Quiz {
   pregunta: string,
   respuestas: string[], correcta: string, count?: number
}

export interface state { respuestas: string[] }