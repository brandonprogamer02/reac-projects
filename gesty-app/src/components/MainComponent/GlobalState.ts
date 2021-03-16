import { IAction, IState } from './types'


export const reducer = (state: IState, action: IAction) => {
   const actionCuatrimestre = action.dataCuatrimestre
   const actionCuatrimestres = action.dataCuatrimestres
   const actionMateria = action.dataMateria
   const stateCua = state.cuatrimestres

   switch (action.type) {
      case 'ADDCUATRIMESTRE':
         if (actionCuatrimestre === undefined) throw new Error('');
         if (actionCuatrimestre.data === undefined) throw new Error('')

         let retorno2 = [...stateCua, actionCuatrimestre.data]
         const f = { ...state, cuatrimestres: retorno2 }
         return f;
      case 'REPLACECUATRIMESTRES':
         if (actionCuatrimestres === undefined) throw new Error('');
         const retorno3 = { ...state, cuatrimestres: actionCuatrimestres.data }
         return retorno3;
      case 'DELETECUATRIMESTRE':
         if (actionCuatrimestre?.indice === undefined) throw new Error('');
         let newStateCua = stateCua.filter((element, index) => index !== actionCuatrimestre.indice)
         const retorno4 = { ...state, cuatrimestres: newStateCua }
         return retorno4;
      case 'NUEVAMATERIA':
         if (actionCuatrimestre?.indice === undefined) throw new Error('');
         if (actionMateria?.data === undefined) throw new Error('');
         const indiceCuatrimestre1 = actionCuatrimestre.indice
         let cuatrimestres1 = state.cuatrimestres
         cuatrimestres1[indiceCuatrimestre1] = [...cuatrimestres1[indiceCuatrimestre1], actionMateria.data]
         const retorno5 = { ...state, cuatrimestres: cuatrimestres1 }
         return retorno5;
      case 'DELETEMATERIA':
         if (actionCuatrimestre?.indice === undefined) throw new Error('')
         if (actionMateria?.indice === undefined) throw new Error('')

         const indiceCuatrimestre2 = actionCuatrimestre.indice
         const indiceMateria = actionMateria.indice
         let cuatrimestres2 = state.cuatrimestres
         
         cuatrimestres2[indiceCuatrimestre2] = cuatrimestres2[indiceCuatrimestre2].filter((elem, index) => index !== indiceMateria)
         
         const retorno6 = { ...state, cuatrimestres: cuatrimestres2 }
         return retorno6;
      case 'UPDATEMATERIA':
         if (actionCuatrimestre?.indice === undefined) throw new Error('')
         if (actionMateria?.indice === undefined) throw new Error('')
         if (actionMateria?.data === undefined) throw new Error('')

         const cuatrimestres = stateCua
         cuatrimestres[actionCuatrimestre?.indice][actionMateria?.indice] = actionMateria.data
         return {... state , cuatrimestres}

      default: return state
   }
}
export const inicialState: IState = {
   cuatrimestres: []
}

export const actions = {
   addCuatrimestre: 'ADDCUATRIMESTRE',
   replaceCuatrimestres: 'REPLACECUATRIMESTRES',
   deleteCuatrimestre: 'DELETECUATRIMESTRE',
   nuevaMateria: 'NUEVAMATERIA',
   deleteMateria: 'DELETEMATERIA',
   updateMateria: 'UPDATEMATERIA'
}




