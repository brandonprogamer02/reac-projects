import styled from 'styled-components'
import { devices } from '../../media_query'

export const DivParentAllContainer = styled.div`
   
   height: 76vh;
   margin:auto;
   margin-bottom: 30px;
   width:100%;
   font-size:large;
   box-sizing: border-box;
   margin-right: 20px;  
   background-color:#ECEBEB;
   
   *{
      text-align: center;
   }
   > h3 {
      display:block;
      margin-top:0px;;
      background-color:#ECEBEB;
      
   }
   
   ${devices.mobile(`
      height: 82vh;
      > h3{ 
         margin-left: 20px;
         display: flex;
         flex-flow: row nowrap;
         justify-content: space-between;
         font-size:medium;
         left: 10px;
      }    
   `)}
`
export const DivMainContainer = styled.div`
   justify-content:center;
   width: 100%;
   margin-top: 0px;
   display:flex;
   height: 100%; // 89
   background-color: #F2F3F5;
   ${devices.mobile(`
      flex-flow: row wrap;
      width: 100%;
      height: 87vh;
   `)}
`
export const DivQuizContainer = styled.div`
   display:flex;
   width: 55%;
   flex-flow: row wrap;
   justify-content:center;
   overflow-y: auto;
   margin: 10px;
   box-shadow: 0px 0px 10px 5px rgb(202, 202, 202);

   ${devices.mobile(`
      height: 49vh;
      width: 420px;
      flex-flow: row wrap;
   `)}
`
