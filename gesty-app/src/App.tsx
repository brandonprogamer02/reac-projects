import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import MainComponent from './components/MainComponent/MainComponent'

const Pruebas = () => {

  return <div>Hola Mundo</div>
}

const App = () => {
  return (
    <BrowserRouter >
      <Route path='/' exact render={() => <MainComponent />} />
      <Route path='/pruebas' exact render={() => <Pruebas />} />
    </BrowserRouter>
  );
}



export default App;
