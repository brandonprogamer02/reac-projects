export interface IProps {
   closeDialog: () => void,
   addQuiz: (pregunta: string, respuestas: string[], correcta: string) => void
}
export interface IState { respuestas: Array<string>, contador: number, correcta: string }