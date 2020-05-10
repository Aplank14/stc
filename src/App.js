import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Cities from './components/Cities'
import City from './components/City'
import Nearby from './components/Nearby'
import Business from './components/Business'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import StateMap from './components/Map'
import State from './components/State'
import NewBusiness from './components/NewBusiness'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/business/:id" component={Business} />
          <Route path="/city/:city" component={City} />
          <Route path="/state/:id" component={State} />
          <Route path="/nearby" component={Nearby} />
          <Route path="/map" component={StateMap} />
          <Route path="/city" component={Cities} />
          <Route path="/about" component={About} />
          <Route path="/newBusiness" component={NewBusiness} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
