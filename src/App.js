import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Cities from './components/Cities'
import City from './components/City'
import Businesses from './components/Businesses'
import Business from './components/Business'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/business/:id" component={Business} />
          <Route path="/city/:city" component={City} />
          <Route path="/business" component={Businesses} />
          <Route path="/city" component={Cities} />
          <Route path="/" component={Home} />
          <Route path="/About" component={About} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
