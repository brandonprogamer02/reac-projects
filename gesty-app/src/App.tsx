import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import MainComponent from './components/MainComponent/MainComponent'



const App = () => {
  return (
    <BrowserRouter >
      <Route path='/' exact render={() => <MainComponent />} />
    </BrowserRouter>
  );
}


export default App;