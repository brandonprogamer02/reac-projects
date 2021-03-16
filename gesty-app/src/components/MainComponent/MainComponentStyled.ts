import styled, { createGlobalStyle } from 'styled-components'
import { Button, LabelPromedioCuatrimestral } from '../Cuatrimestre/CuatrimestreStyled'


export const DivParentContainer = styled.div.attrs({ className: '' })`
   height: 100vh;    
   background-image: radial-gradient(circle at 48.47% 50.41%, #daa6ff 0, #b78aee 25%, #8f6cd8 50%, #6350c3 75%, #2e3ab1 100%);

`

export const GlobalStyles = createGlobalStyle`
   body button {
      :hover{
         cursor:pointer;
      }
   }
   body * {
      @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
      font-family: 'Bangers', cursive;
   }
`
export const DivMainContainer = styled.div`  
   display:flex;
   margin: auto;
   justify-content: center;
   flex-flow: row wrap;
   background-color: white;
   border-radius: 10px; 
   align-content: space-around;
   width: 95%;
   height: 90%;
   box-shadow: 0px 0px 8px 0.5px black;

`

export const DivCuatrimestres = styled.div`
   display: flex;
   border-top: 3px solid #CACACA;    
   border-bottom: 3px solid #CACACA;    
   flex-basis: 95%;
   height: 70%;
   
   @media (min-width: 0px) { 
      overflow-y: auto; 
      flex-flow: row wrap;
     
   };
   @media (min-width: 576px) { 
      flex-flow: row nowrap;
   };
   
`

export const ButtonNuevoCuatrimestre = styled(Button)`
   background-color: cornflowerblue;
   align-self: center;
   font-weight: 1000;
   @media (min-width: 0px) {
      font-size:small;
      padding: 20px 20px;
   };
   @media (min-width: 576px) { 
      height: 20%;
      width:150px;
   };
   
`



export const LabelPromedioHistorico = styled.label`
   font-weight: 600;
   
`
export const Titulo = styled(LabelPromedioCuatrimestral)`
   background-color:purple;
   width: 80%;
   font-size: x-large;
   font-weight: bold;
   padding: 14px 0px;
   @media (min-width: 0px) {
      font-size:medium;
     
   };
   @media (min-width: 576px) { 
      font-size:x-large;
   };
`
