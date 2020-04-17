import React from 'react'
import './App.css'
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

import Home from './components/Home'
import Cities from './components/Cities'
import Businesses from './components/Businesses'
import Business from './components/Business'
import City from './components/City'

function App() {
  return (
    <div>
      <Router>
        <header>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">Helping Out Our Local Business</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link to="/">Home</Nav.Link>
                <Nav.Link to="/">About Us</Nav.Link>
                <NavDropdown title="Search" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/business">By Business</NavDropdown.Item>
                  <NavDropdown.Item href="/city">By City</NavDropdown.Item>

                  {/* Split Drop Down
         <NavDropdown.Divider />
         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
         */}
                </NavDropdown>
              </Nav>

              {/* Search Box
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  */}
            </Navbar.Collapse>
          </Navbar>

          <Route exact path="/" component={Home} />
          <Route exact path="/business" component={Businesses} />
          <Route exact path="/city" component={Cities} />
          <Route path="/business/:id" component={Business} />
          <Route path="/city/:city" component={City} />
        </header>
      </Router>
    </div>
  )
}

export default App
