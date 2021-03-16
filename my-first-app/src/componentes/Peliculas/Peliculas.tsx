import React from 'react'
import css from './style.module.css'
import axios from 'axios'
import { isThisTypeNode } from 'typescript'
import { resolve } from 'dns'
import { rejects } from 'assert'

type TypeDataApi = {
   Actors: string,
   Plot: string,
   Title: String,
   Poster: string
}
class Peliculas extends React.Component<{}, { data: TypeDataApi, mostrarMovie: boolean, movieNotFound: boolean }> {

   inputPelicula = React.createRef<HTMLInputElement>()
   state = {
      data: {
         Actors: '',
         Plot: '',
         Title: '',
         Poster: ''
      },
      mostrarMovie: false,
      movieNotFound: false
   }

   render = () => {
      return (
         <div className={css['container']}>
            <input ref={this.inputPelicula} type="text"
               placeholder='ingresa la pelicula que quieres buscar'
            />
            <button onClick={this.action} >Buscar Pelicula</button>
            <button onClick={this.closeMovieActive}>Cerrar Resultado Busqueda</button>
            { this.state.mostrarMovie && <Marcado data={this.state.data} />}
            { this.state.movieNotFound && <this.MovieNotFound />}
         </div>
      )
   }
   MovieNotFound = () => (
      <div>
         <h1>Movie Not Found</h1> <label>Coloca bien el nombre</label>
      </div>
   )
   closeMovieActive = () => this.setState({ mostrarMovie: false })

   action = async () => {
      const peliculaIngresada = this.inputPelicula.current?.value
      const url = `http://www.omdbapi.com/`
      const res = await axios.get(url, {
         params: {
            t: peliculaIngresada,
            apikey: 'b6172d61'
         }
      })
      if (res.data.Response == 'True') await this.setState({ data: res.data, mostrarMovie: true, movieNotFound: false })
      else await this.setState({ movieNotFound: true, mostrarMovie: false })
   }
}

class Marcado extends React.Component<{ data: TypeDataApi }, {  }> {
  
   render = () => {
      const { Title, Plot, Actors, Poster } = this.props.data
      return (
         <div>
            <h2> {Title}</h2>
            <p>{Plot}</p>
            <span> <b>Actors:</b> {Actors}</span><br />
            <img src={Poster} alt="poster" />
         </div>
      )
   }
   componentDidUpdate = (prevProps: any, prevState: { }) => {
      console.log('prevPros:',prevProps,'props:',this.props)
   }

}
export default Peliculas