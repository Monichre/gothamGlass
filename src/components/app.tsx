import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './home'
import Clients from './clients'

export interface AppProps {
  children: any
}

const App: React.SFC<AppProps> = ({ children }) => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/clients'>
          <Clients />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
