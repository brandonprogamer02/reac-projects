
import React from 'react';
import { createBuilderStatusReporter, createJSDocThisTag, isPropertySignature } from 'typescript';
import './App.css';
import Producto from './componentes/Producto';
import Lienzo from './componentes/Lienzo'
import PruebasCss, { ComponentePortal } from './pruebas_css'
import Cosillas from './componentes/cosillas'
import GaleriaFotos from './componentes/GaleriaFotos'
import Peliculas from './componentes/Peliculas'
import CalculadoraComplejos from './componentes/CalculadoraComplejos'
import Chat from './componentes/Chat'
import ParentComponent from './componentes/ParentComponent';
import MyHook from './componentes/hooks/MyHook'
import HookUseReducer from './componentes/hooks/HookUseReducer';
import HookUseImperativeHandle from './componentes/hooks/HookImperativeHandle'
import ReactMemo from './componentes/hooks/ReactMemo'
import Children from './componentes/hooks/Children'
import ComposicionImplicita from './componentes/hooks/composicion_implicita/index'
import Flexbox from './pruebas_css/flexbox/Flexbox'
import StyledComponents from './pruebas_css/styled_components/app'
import ReactRouter from './componentes/react_router/App'
import Redux from './componentes/leccion_redux/app'
import Bootstrap from './componentes/bootstrap/index'

const App = () => (

	<div>
		<Bootstrap />
	</div>



)

export default App;
