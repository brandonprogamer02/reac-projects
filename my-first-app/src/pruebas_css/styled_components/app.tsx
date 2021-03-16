import React from 'react'
import styled, { createGlobalStyle,css } from 'styled-components'
import { devices } from './media_query'
const color = '#DB7763'
const secundaryColor = '#E85D98'

const GlobalStyled = createGlobalStyle`
   body{
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap');
      font-family: 'Space Grotesk', sans-serif;
      background: purple;  

      ${devices.tablet(`
         background: yellow;
      `)}
      
      ${devices.mobile(`
         background: red;
      `)}
      
   }
`

const f = css`
   color:black;
`

const Span = styled.span`
   border: 2px solid ${secundaryColor};

   ${devices.tablet(`
      color:black;
   `)}

   ${devices.mobile(`
      color:white;
   `)}
`
const App = () => {

   return (
      <div>
         <GlobalStyled />
         <Span>Hellow World 2</Span>
      </div>
   )
}
export default App
