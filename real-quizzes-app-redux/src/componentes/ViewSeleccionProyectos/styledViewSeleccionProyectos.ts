import styled from 'styled-components'
import { devices } from '../../media_query'

export const DivParentAllContainer = styled.div`
   align-items: center;
   justify-content: center;
   /* border: 3px solid red; */
   background-color:#FAFAFA;
   height: 99vh;
   display:flex;
   flex-flow: column nowrap;
   ${devices.mobile(`
      height: 99vh;
      
   `)}  
`

export const DivQuizzes = styled.div`
   background-color: white;
   min-height: 300px;
   border-radius: 10px;

`
export const LiCuestionarioSeleccionado = styled.li`
   background-color: rgb(211, 207, 207);
   list-style: none;
   cursor: pointer;
   padding: 15px;
   margin: 15px 10px;
   font-size: large;
   border: 6px solid ${({ seleccionado }: { seleccionado: boolean }) => seleccionado ? 'cornflowerblue' : 'rgb(211, 207, 207)'};
   border-radius:10px ;

   ${devices.mobile(`
      font-size:medium;
   `)}
`


export const DivBotonera = styled.div`
   display:flex;
   /* background-color:red; */
   flex-flow: row wrap;
   width:100%;
   justify-content: center;
   margin: auto;
   

`
export const FooterPayola = styled.footer`
   color: white;
   border-radius: 6px;
   box-shadow: 0px 0px 4px 1px grey;
   font-weight: bold;
   font-size: medium;
   background-color: purple;
   margin-bottom: 10px;
   padding: 10px 30px;
   ${devices.mobile(`
      font-size:small;
   `)}

`
export const DivContenido = styled.div`
   margin:auto;
   width:90%;
   box-shadow: 0px 0px 10px 5px rgb(202, 202, 202);
   > h2{

      background-color: white;
   }
   * {
      text-align: center;
   }
   ${devices.mobile(`
      display:flex;
      flex-flow: column nowrap;
      height: 87vh;

      h2{
         font-size:large;
      }
   `)}
`




