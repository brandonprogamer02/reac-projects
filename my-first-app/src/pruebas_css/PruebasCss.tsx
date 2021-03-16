import React, { ChangeEvent, createElement, MouseEvent, MouseEventHandler, SyntheticEvent } from 'react'
import ReactDOM from 'react-dom'
import css from './PruebasCss.module.css'
import Main from './Nueva'

interface props { isDay: boolean }
type state = { seleccionado: string, color: string }

interface Frutas { frutas: Array<{ nombre: string, precio: number }> }
const frutas: Frutas = {
   frutas: [
      {
         nombre: 'fresa',
         precio: 30
      },
      {
         nombre: 'kiwi',
         precio: 32
      },
      {
         nombre: 'coco',
         precio: 29
      }
   ]
}

class PruebasCss extends React.Component<props, state> {
   state = {
      seleccionado: '',
      color: 'black'
   }
   event = (event: React.MouseEvent) => {
      const f = event.currentTarget.id
      this.setState({ seleccionado: f })
   }
   render = () => {
      return (
         <main id='mainb' className={css['main-styles']} >
            <h2>AQUI SE ESCRIBE Y CAMBIE EL COLOR DEL COLOR</h2>
            {this.condicionalRenderizado()}
            {
               frutas.frutas.map((element, index) => {
                  return (
                     <div id={element.nombre + index} onClick={this.event} key={element.nombre + element.precio} >
                        <li style={{ color: this.state.seleccionado == element.nombre + index ? 'teal' : 'black' }} >
                           {element.nombre} - $ {element.precio}
                        </li>
                     </div>
                  )
               })
            }
            <input type="text" className={css['input']} onChange={this.changeEvent} /> <br />
            <label id='label' style={{ color: this.state.color }}>COLOR</label>
            <Component onSaluda={this.manejadorInterno} >
               <h2>ESTO ES UN TITULO BIEN CABRON</h2>
            </Component>
            <Main/>
            
         </main>
      )
   }
   condicionalRenderizado = () => {
      return this.props.isDay ? <p>HOY ES DE DIA CABRON</p> : <p>NO ES DE DIA</p>
   }
   manejadorInterno = () => {
      alert('nombre')
   }
   changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {

      this.setState(() => { return { color: event.target.value } })
   }
}

type f = { onSaluda: React.MouseEventHandler }
class Component extends React.Component<f, {}> {
   render = () => {
      return (
         <>
            {this.props.children}
            <button onClick={this.props.onSaluda}>
            </button>
         </>
      )
   }
}

export class ComponentePortal extends React.Component {
   render = () => {
      const nodo = document.getElementById('segundo-root')!
      return ReactDOM.createPortal((
         <div>
            <h2>YO SOY UN COMPONENTE PORTAL</h2>
         </div>
      ), nodo)
   }
}

export default PruebasCss

