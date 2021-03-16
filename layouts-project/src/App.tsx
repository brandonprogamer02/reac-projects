import React, { createContext, useState } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import SocialMediaDashboard from './components/SocialMediaDashboard/SocialMediaDashboard'
import PricingViewfrom from './components/PricingView/PricingView'
import Navigation from './components/resources/Navigation/Navigation';


const routes = {
  SOCIAL_MEDIA_DASHBOARD: '/',
  PRICING_VIEW: 'pricing-view'
}

interface IContext {
  currentRoute: string,
  setCurrentRoute: (arg0: string) => void,
  nextOrPreviousRoute: (type: string) => void
}


export const context = createContext<IContext>({
  currentRoute: routes.SOCIAL_MEDIA_DASHBOARD,
  setCurrentRoute: () => { },
  nextOrPreviousRoute: (type: string) => { }
})


const App = () => {
  const [currentRoute, setCurrentRoute] = useState(routes.SOCIAL_MEDIA_DASHBOARD)

  function nextOrPreviousRoute(type: string) {
    const dic: any = routes
    const registro = []
    let f = false
    for (const key in dic) {
      registro.push(dic[key])
      if (dic[key] === currentRoute) f = true
      if (f) {
        (type === 'Next') ? setCurrentRoute(registro[registro.length - 1])
          : setCurrentRoute(registro[registro.length - 2])
      }
    }

  }
  const contextValue: IContext = { currentRoute, setCurrentRoute, nextOrPreviousRoute }

  return (
    <BrowserRouter>
      <context.Provider value={contextValue}>
        <Navigation left={true} />
        <Navigation left={false} />
        <Route path='/' exact render={() => <SocialMediaDashboard />} />
        <Route path='/pricing-view' render={() => <PricingViewfrom />} />
        <Redirect to={currentRoute} />
      </context.Provider>
    </BrowserRouter>
  );
}

export default App;
