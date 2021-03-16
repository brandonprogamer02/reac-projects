import styled from 'styled-components'
import { devices } from '../../media_query'

export const Dialog = styled.dialog`
   outline: none;
   background-color: teal;
   color: white;
   border: 0px solid teal;
   box-shadow: 0px 0px 10px 5px grey;
   ${devices.mobile(`
      width: 80%;
      *{
         font-size:small; 
         
      }
   `)}
   *{
      font-weight: bold;
      outline: none;
   }

   input {
      margin: 15px;
      width: 50%;
      padding: 1px;
      font-weight: normal;
   }
   .titulo { 
      margin-top:-5px;
      /* background-color: red; */
      /* color: teal; */
      padding: 5px;
      margin:0px
   }
   .titulo .boton-cerrar {
      float: right;
      color: white;
      background-color: red;
      border: 2px solid red;
      outline: none;
      cursor: pointer;
   }
   .li-respuestas {
      overflow-y: auto;
      height: 180px;
   }
   .li-respuestas li {
      background-color: grey;
      margin: 13px;
      padding: 5px;
      list-style: none;
   }
   
   
`