import styled, { createGlobalStyle } from 'styled-components'
import { devices } from './media_query'

export const GlobalStyles = createGlobalStyle`
   body *{
      @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
      font-family: 'Anton', sans-serif;
   }
`
export const H1TituloAplicacion = styled.h1`
   color: white;
   padding: 15px;
   background-color: teal;
   text-shadow: 2px 2px black;
   font-size: x-large;
   margin-top: 0px;
   ${devices.mobile(`
      font-size:large ;
      padding: 7px
   `)}
`

export const Button = styled.button`
   background-color: teal;
   margin: 5px 5px;
   color: white;
   border:none;
   box-shadow: 0px 0px 4px 1px grey;
   padding: 10px 20px;
   font-weight: bold;
   font-size: medium;
   outline: none;
   transition: opacity 300ms ease-in-out;
   ${({ styles }: { styles?: string }) => styles}
   ${devices.mobile(`
      font-size:small;
   `)}

   :hover{ 
      cursor: pointer; 
      opacity: 0.75;   
   }
`
export const Input = styled.input`
   padding: 5px;
   border: 0px;
   outline: none;
   box-shadow: 0px 0px 4px 1.5px grey;
   transition: all 350ms ease-in-out;
   border-radius: 5px;
   :focus{
      box-shadow: 0px 0px 2px 3px #073B56;
   }
`
