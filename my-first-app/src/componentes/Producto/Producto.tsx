import React from 'react'
import css from './Producto.module.css'

interface MyProps { producto: string, desc: string, precio: number };
type MyState = { cantidad: number, estadoPrueba: string };

class Producto extends React.Component<MyProps, MyState> {
	state = {
		cantidad: 0,
		estadoPrueba: 'ESTE ES EL TITULO'
	}
	render = () => {

		// estilos dinamicos
		let clases = css['card'];
		clases += this.state.cantidad >= 5 ? ' ' + css['card-pasado'] : ''

		return (
			<div className={clases} >
				<h3 style={{ marginTop: '-5px' }}>Producto: {this.props.producto}</h3>

				<p>Cantidad: {this.state.cantidad}</p>

				<p>Precio: {this.props.precio}</p>

				<p>{this.props.desc}</p>
				<p>TOTAL: {this.state.cantidad * this.props.precio} RD$</p>
				<hr />
				<div id="botonera">
					<button onClick={this.anadir}>+</button>
					<button onClick={this.quitar}>-</button>
					<button onClick={this.quitarTodo}>clean</button>
				</div>

			</div>
		)
	}
	anadir = () => {
		this.setState((state) => ({
			...state,
			cantidad: state.cantidad + 1,

		})
		)
	}

	quitar = () => {

		if (this.state.cantidad > 0) this.setState({ cantidad: this.state.cantidad - 1 })

	}
	quitarTodo = () => {
		if (this.state.cantidad != 0) this.setState({ cantidad: 0 })
	}

}

export default Producto