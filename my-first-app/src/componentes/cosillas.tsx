import React from 'react'
import { Type } from 'typescript'


class Cosillas extends React.Component {
   state = {
      products: {
         uno: {
            id: 1,
            name: 'camisa unicornio',
            colors: ['#467367', '#05fd88', '#a706ee'],
            price: 20
         },
         dos: {
            id: 2,
            name: 'jeans',
            colors: ['#D35EFF', '#9956E8', '#876BFF', '#5662E8', '#5E96FF'],
            price: 32
         },
         tres: {
            id: 3,
            name: 'taza',
            colors: ['#804342', '#FFD2D1', '#FF8785', '#806969'],
            price: 20
         },
         cuatro: {
            id: 4,
            name: 'camisa icream',
            colors: ['#2544B3', '#FF8A69', '#5076FF', '#7FCC2B', '#73B32E'],
            price: 20
         },
         cinco: {
            id: 5,
            name: 'camisa dragon',
            colors: ['#B32542', '#FF6987', '#FF4F73', '#14B32E', '#5EFF78'],
            price: 20
         }
      }
   }

   render = () => {
     
      this.mera()
      
      return (
         <div>
         </div>
      )
   }
   mera = () => {
      const {products} = this.state
      const keys:string[] = Object.keys(products)
      // keys.map(el => console.log(products['uno']))
   }

}


export default Cosillas

