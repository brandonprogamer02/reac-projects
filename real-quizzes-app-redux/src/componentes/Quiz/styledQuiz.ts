import styled from 'styled-components'
import { devices } from '../../media_query'
export const DivParentAllContainer = styled.div`
   /* display: block; */
   padding: 20px;
   margin: 10px ;
   width: 100%;
   box-shadow: 0px 0px 8px 3px #DEDEDE;
   ${devices.mobile(`
      width: 82%;
   `)}
   :hover{ cursor:pointer;}
   *{ 
      :hover{ cursor:pointer;}
   }
`

export const LabelNumeroPregunta = styled.label`
   display: block;
   margin-bottom: 10px;
   padding: 10px;
   font-size: medium;
   font-weight: bold;
   background-color: teal;
   color: white;
`
export const LabelPregunta = styled.label`
   font-size: medium;
   display: block;
   font-weight: bold;
   color: teal;
   margin-bottom: 20px;
`
export const DivSeleccion = styled.div`
   li{ 
      list-style: none;
      font-size: medium; 
   }
   span{
      margin-left: 30px;
   }
`
export const LiRespuesta = styled.li`
   font-size: 20px;
   padding:5px;
   :hover{
      cursor: pointer;
      color: white;
      background-color: cadetblue;
   }
`
export const DivRespuestaCorrecta = styled.div`
   margin-top: 15px;
   background-color: green;
   color: white;
   padding: 9px;
   font-weight: bold;
   font-size: medium;

   img{
      position: relative;
      top: 3px;
      margin-right: 10px;
   }
`