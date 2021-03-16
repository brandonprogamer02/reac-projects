import React from 'react';
import { connect } from 'react-redux'
import ViewSeleccionProyectos from './componentes/ViewSeleccionProyectos/ViewSeleccionProyectos'
import ViewAdminQuiz from './componentes/ViewAdminQuiz/ViewAdminQuiz'
import { GlobalStyles } from './styledGlobal'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { IProps } from './redux/types/global'
import { mapStateToProps, mapDispatchToProps } from './redux/map/mapeo'

const App = (props: IProps) => {
 
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Route path='/' exact render={() => <ViewSeleccionProyectos />} />
      <Route path='/adminquiz' render={() => <ViewAdminQuiz />} />
      <Redirect to={props.ruta} />
    </BrowserRouter>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
