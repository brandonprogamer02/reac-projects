import React from 'react'
import css from './Lienzo.module.css'

interface props { }
interface state { drawActive: boolean, x: number, y: number }

class Lienzo extends React.Component<props, state>{

   state = {
      drawActive: false, x: 0, y: 0
   }
   render = () => {
      return (
         <div>
            <h2>COMPONENTE LIENZO</h2>
            <canvas id="canvas" className={css['canvas']} onMouseDown={this.draw} onMouseUp={this.draw} onMouseMove={this.draw}>
            </canvas>

         </div>
      )
   }

   draw = async (event: React.MouseEvent) => {
      // console.log(event.type)
      if (event.type == 'mousedown') {
         await this.setState(state => { return { ...state, drawActive: true } });
      }
      else if (event.type == 'mouseup') {
         await this.setState(state => { return { ...state, drawActive: false } });
      }
      else if (event.type == 'mousemove' && this.state.drawActive) {
         // const posX = event.clientX; const posY = event.clientY
         const pos = this.oMousePos(this.getCanvasElementById('canvas'), event)

         this.dibujarLinea(0,0,pos.x+100, pos.y +20)
         // this.dibujarLinea(0,0,200, 10)
         
         console.log(pos)
      }

   }
   dibujarLinea = ( xinicial: number, yinicial: number, xfinal: number, yfinal: number) =>// esta es la funcion encargado de dibujar en el canvas 
   {
      const lienzo = this.getCanvasRenderingContext2D(this.getCanvasElementById('canvas'))
      lienzo.beginPath();
      lienzo.strokeStyle = 'red';
      lienzo.lineWidth = 1;
      lienzo.moveTo(xinicial, yinicial);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
   }

   
   getCanvasRenderingContext2D = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
      const context = canvas.getContext('2d');
      if (context === null) {
         throw new Error('This browser does not support 2-dimensional canvas rendering contexts.');
      }
      return context;
   }
   getCanvasElementById = (id: string): HTMLCanvasElement => {
      const canvas = document.getElementById(id);

      if (!(canvas instanceof HTMLCanvasElement)) {
         throw new Error(`The element of id "${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`);
      }
      return canvas;
   }
   oMousePos(elemento: HTMLElement, evt: React.MouseEvent) {
      var ClientRect = elemento.getBoundingClientRect();
      return { //objeto
         x: Math.round(evt.clientX - ClientRect.left),
         y: Math.round(evt.clientY - ClientRect.top)
      }
   }

}

export default Lienzo