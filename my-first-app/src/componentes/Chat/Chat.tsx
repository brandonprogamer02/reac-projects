import React, { SyntheticEvent } from 'react'
import Mensaje from './Mensaje'
import css from './Chat.module.css'
import faker from 'faker'
import PubSub from 'pubsub-js'

type IMensajes = { id: string, name: string, avatar: string, message: string }
type IState = {
   mensajes: Array<IMensajes>
}
// state = {
//    mensajes: [
//       {
//          id: 'string', name: 'string', avatar: 'string', message: 'string'
//       }
//    ]
// }
class Chat extends React.Component<{}, IState> {
   Context = React.createContext()
   scroll = React.createRef<HTMLDivElement>()
   mensaje = React.createRef<Mensaje>()
   state = {
      mensajes: []
   }
   render = () => {
      return (
         <div className={css['padre']}>
            <h1>Chat Aplication</h1>
            <div className={css['card']} ref={this.scroll}>
               {/* condicional para la primera vez que es nulo */}
               {this.state != null && (
                  this.state.mensajes.map(element => {
                     const { id, name, avatar, message } = element
                     return <Mensaje ref={this.mensaje} name={name} avatar={avatar} message={message} key={id} />
                  })
               )}
            </div>
            <button onClick={this.agregarMessaje}>Agregar mensaje</button>
         </div>

      )
   }

   agregarMessaje = async () => {
      // extraemos data 
      const id = faker.random.uuid(); const name = faker.name.findName()
      const avatar = faker.image.image(); const message = faker.hacker.phrase()

      //codigo para poner el scroll abajo si se esta abajo
      const scroll = this.scroll.current
      let final = false
      if (scroll == null) throw new Error('element not found')
      const posScrollTotal = Math.round(scroll.scrollTop) + 370
      const scrollHeight = Math.round(scroll.scrollHeight)
      if (posScrollTotal == scrollHeight || posScrollTotal == scrollHeight + 1) final = true
      // condicional para la primera vez que va a ser null para anadir la data al state
      if (this.state == null) await this.setState({ mensajes: [{ id, name, avatar, message }] })
      else {
         await this.setState((prevState) => (
            {
               mensajes: [...prevState.mensajes, { id, name, avatar, message }]
            }
         ))
      }
      // si el scroll esta abajo se mantiene abajo
      if (final) scroll.scrollTop = scrollHeight
   }
   componentDidUpdate = () => {
      PubSub.subscribe('eventoMensaje', (e: any, data: any) => {
         console.log(data)
      })
   }

}

export default Chat