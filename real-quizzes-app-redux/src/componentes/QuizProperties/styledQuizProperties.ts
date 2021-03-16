import styled from 'styled-components'
import {devices} from '../../media_query'

export const DivParentAllContainer = styled.div`
   box-shadow: 0px 0px 10px 5px rgb(202, 202, 202);
   margin: 10px;
   display:flex;
   flex-flow: column nowrap;
   width: 35%;
   overflow-y: auto;
   margin-right: 1%;
   ${devices.mobile(`
      width: 420px;
      display:flex;
      float:none;
   `)}
`

export const DivTitulo = styled.div`
   margin: 3px 6px;
   > label {
      font-size:medium;
   }
   * {
      margin: 2px 2%
   }
`
export const DivQuizProperties = styled.div`
   margin-top: 10px;
`

export const DivPregunta = styled.div`
   margin-bottom: 10px;
   > label {
      font-size:medium;
   }

   *{
      margin: 0px 6px;
   }
`
export const DivRespuestas = styled.div`
   > label{
      color: teal;
      font-weight: bold;
      font-size:medium;
   }
   > button{
      margin-left: 20px;
      cursor: pointer;
      background-color: teal;
      color: white;
      font-weight: bold;
      border: 0px;
      font-size: medium;
      :hover{
         cursor: pointer;
      }
   }
`
export const DivListaRespuesta = styled.div`
   
   overflow-y: scroll;
   height: 140px;
   margin: 10px;
   border-bottom: 1px solid grey  ;
   border-top: 1px solid grey  ;

   li{
      position: relative;
      color: white;
      font-weight: bold;
      background-color: rgb(156, 156, 156);
      list-style: none;
      width: 100%;
      margin: 7px 0px;
      padding: 2px 0px;
      box-shadow: 0px 0px 2px 0.5px black;
      
      input{
         font-weight: bold;
         width: 75%;
         background-color: rgb(156, 156, 156);
         color: white;
         border:0px;
         outline: none;
         box-shadow: 0px 0px 2px 0.1px black;
      }
      button{
         position: absolute;
         background-color: red;
         color: white;
         outline: none;
         border: 0px;
         right: 5px;
         :hover{ cursor:pointer; }
      }

   }
`
export const DivCabezera = styled.div`
   > label{
      display:block;
      color: teal;
      font-weight: bold;
      margin:15px;
   }
`

export const DivCorrecta = styled.div`
   margin-bottom: 5px;

   label {
      font-weight: bold;
      font-size: medium;
      color: teal;
      margin-bottom: 5px;
   }
   *{
      margin: 0px 6px;
   }

`
