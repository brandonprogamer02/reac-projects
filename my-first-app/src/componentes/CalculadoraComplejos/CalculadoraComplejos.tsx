import React from 'react'
import css from './CalculadoraComplejos.module.css'
import Complejos from './Logica'

class CalculadoraComplejos extends React.Component<{}, { resultado: string }> {
   aReal = React.createRef<HTMLInputElement>(); aImaginario = React.createRef<HTMLInputElement>()
   bReal = React.createRef<HTMLInputElement>(); bImaginario = React.createRef<HTMLInputElement>()
   operacion = React.createRef<HTMLSelectElement>()
   state = {
      resultado: ''
   }

   render = () => {
      return (
         <div className={css['container']}>
            <div>
               <label >NUMERO A</label>
               <input type="number" ref={this.aReal} placeholder='Parte Real'/>
               <input type="number" ref={this.aImaginario} placeholder='Parte Imaginaria'/>i
            </div>
            <div>
               <label>NUMERO B</label>
               <input type="number" ref={this.bReal} placeholder='Parte Real'/>
               <input type="number" ref={this.bImaginario} placeholder='Parte Imaginaria' />i
            </div>
            <select ref={this.operacion}>
               <option>Sumar</option>
               <option>Restar</option>
               <option>Multiplicar</option>
               <option>Dividir</option>
            </select>
            <button onClick={this.action}>Calcular</button>
            <label >TU RESULTADO: {this.state.resultado}</label>
         </div>
      )
   }
   action = () => {
      // extraemos la data de los inputs e inicializamos variables
      const aReal = Number(this.aReal.current?.value); const aImaginario = Number(this.aImaginario.current?.value)
      const bReal = Number(this.bReal.current?.value); const bImaginario = Number(this.bImaginario.current?.value)
      const seleccion = this.operacion.current?.value
      let resultado: string = ''

      if (aReal == null || aImaginario == null || bReal == null || bImaginario == null) throw new Error('INPUT NULL')

      switch (seleccion) {
         case 'Sumar':
            resultado = Complejos.suma(new Complejos(aReal, aImaginario), new Complejos(bReal, bImaginario)).complejo
            break
         case 'Restar':
            resultado = Complejos.resta(new Complejos(aReal, aImaginario), new Complejos(bReal, bImaginario)).complejo
            break
         case 'Multiplicar':
            resultado = Complejos.multiplicacion(new Complejos(aReal, aImaginario), new Complejos(bReal, bImaginario)).complejo
            break
         case 'Dividir':
            resultado = Complejos.division(new Complejos(aReal, aImaginario), new Complejos(bReal, bImaginario)).complejo
            break
      }
      this.setState({resultado})
      


   }
}
export default CalculadoraComplejos