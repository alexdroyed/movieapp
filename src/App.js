import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from 'pages/Home'
import Detail from 'pages/Detail'

import './App.css'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/show/:showId">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

