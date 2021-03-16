import React, { createRef, Component } from 'react'
import css from './Chat.module.css'
import PubSub from 'pubsub-js'

interface IProps { name: string, avatar: string, message: string }
class Mensaje extends Component<IProps, {}> {
   name = createRef<HTMLHeadingElement>()
   render = () => {
      const { name, avatar, message } = this.props
      return (
         <div className={css['mensaje']}>
            <h2 ref={this.name} >{name}</h2>
            <img className={css['avatar']} src={avatar} alt="avatar" onClick={this.imageEventClick}/>
            <p>{message}</p>
            <hr />
         </div>
      )
   }
   imageEventClick = () => {
      PubSub.publish('eventoMensaje','esto es un evento disparado desde mensaje')
   }
}
export default Mensaje
