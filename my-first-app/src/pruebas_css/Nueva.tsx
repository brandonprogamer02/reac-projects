import { executionAsyncResource } from 'async_hooks'
import React, { Ref, SyntheticEvent, useRef } from 'react'


class Main extends React.Component {
   execute = (data: string) => {
      console.log(data)
   }
   render = () => {
      return (
         <>
            <App execute={this.execute} />
         </>
      )
   }
}

class App extends React.Component<{ execute: (data: any) => void },
   { text: string, techs: string[] }>
{
   input = React.createRef<HTMLInputElement>()
   divPadre = React.createRef<HTMLDivElement>()
   state = {
      text: '',
      techs: ['react']
   }
   componentDidMount = () => {
      this.input.current?.addEventListener('click', () => console.log('mere cabron'))
   }
   handleChange = (event: SyntheticEvent<HTMLSelectElement>) => {
      let techs = [...this.state.techs, event.currentTarget.value]
      console.log(techs)
      this.setState({ techs })
   }
   render = () => {
      return (
         <div ref={this.divPadre}>
            {true && (<h1>hola</h1>)}
            <input ref={this.input} onChange={this.change} />
            <span>elemento hermano</span>
            <label>esto es un fucking label</label>
            <div>
               <form>
                  <select
                     value={this.state.techs}
                     onChange={this.handleChange}
                     multiple
                  >
                     <option value="Angular">Angular</option>
                     <option value="React">React</option>
                     <option value="Vue">Vue</option>
                     <option value="Vanilla">Vanilla</option>
                  </select>
               </form>
               <ul>
                  {this.state.techs.map(tech => (
                     <li key={tech}>
                        { tech}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      )
   }
   change = async () => {
      const value = this.input.current?.value; if (value == null) throw new Error('type error')
      await this.setState({ text: value })
      this.props.execute(this.state.text)
   }
}
export default Main