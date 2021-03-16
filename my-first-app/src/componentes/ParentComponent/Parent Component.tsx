import React, { Component, createRef } from 'react'
import css from './ParentComponent.module.css'
class ParentComponent extends Component
   <{}, { countHermanoA: number, countHermanoB: number }> {
   state = {
      countHermanoA: 0,
      countHermanoB: 0
   }
   render = () => {
      const { countHermanoA, countHermanoB } = this.state
      return (
         <div className={css['card-parent']}>
            <HermanoA count={countHermanoA} conectorPadre={this.oyenteA} countHermanoB={countHermanoB} />
            <HermanoB count={countHermanoB} conectorPadre={this.oyenteB} countHermanoA={countHermanoA}/>
         </div>
      )
   }
   oyenteA =  () => {
      this.setState(prevState => ({ countHermanoA: prevState.countHermanoA + 1 }))
   }
   oyenteB = () => {
      this.setState(prevState => ({ countHermanoB: prevState.countHermanoB + 1 }))
   }
}

const HermanoA = (props: { conectorPadre: (countB?: boolean) => void, count: number, countHermanoB: number }) => {
   return (
      <div>
         <button
            onClick={() => props.conectorPadre()}
         >Boton Hermano A({props.count})</button>
         <label>Count del Hermano B: {props.countHermanoB}</label>
      </div>
   )
}
const HermanoB = (props: { conectorPadre: (countA?: boolean) => void, count: number, countHermanoA: number }) => {
   return (
      <div>
         <button
            onClick={() => props.conectorPadre()}
         >Boton Hermano A({props.count})</button>
         <label>Count del Hermano A: {props.countHermanoA}</label>
      </div>
   )
}
export default ParentComponent