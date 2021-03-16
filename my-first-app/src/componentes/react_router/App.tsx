import React,{useState} from 'react'
import { BrowserRouter, Route, NavLink, RouteProps, Redirect } from 'react-router-dom'
import Flexbox from '../../pruebas_css/flexbox/Flexbox'

const isAuth = false

const Login = () => {
   return <div>Estas en logeo</div>
}
const Perfil = (props: RouteProps) => {
   return isAuth ? <div>Welcome to Perfil </div> : <Redirect to='/login' />
}
const Home = () => {
   const f = useState(0)
   return <div>Este es el Home</div>
}

const Navigation = () => (
   <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
      <NavLink activeStyle={{ color: 'red' }} exact={true} to='/'>home</NavLink>
      <NavLink
         to={{
            pathname: '/perfil',
            // search: '?ordenadorPor=nombre',
            // hash: '#otro-hast',
            state: {
               nombre: 'El real ninja',
               pais: 'Dominican Republic'
            }
         }}
         activeStyle={{ color: 'red' }}
      >Perfil</NavLink>
      <NavLink activeStyle={{ color: 'red' }} to='/login'>Login</NavLink>
   </nav>
)


const App = () => {
   const contexto = React.createContext()

   const Handler = () => {
      return <Redirect to = '/'/>
   }

   return (
      <BrowserRouter>
         <contexto.Provider value = ''>
            <Navigation />
            <Route path='/' exact render={() => <Home />}/>
            <button onClick={Handler} >click me</button>
            <Route path='/login' exact render={Login} />
            <Route path='/perfil' component={Perfil} />
         </contexto.Provider>

      </BrowserRouter>
   )
}

export default App;
