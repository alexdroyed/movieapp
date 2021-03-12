import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from 'pages/Home'
import Detail from 'pages/Detail'

export default function App() {
  return (
    <div>
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

