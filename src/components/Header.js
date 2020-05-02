import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className="headerBackground" variant="dark" expand="lg">
        <Navbar.Brand>
          <Link to="/" className="linkLightBlue">
            Local Options
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link href="/about">
              <div className="headerTitle">About Us</div>
            </Nav.Link>
            <NavDropdown title="Discover" variant="dark" id="basic-navbar-nav">
              <NavDropdown.Item href="/nearby">Nearby</NavDropdown.Item>
              <NavDropdown.Item href="/city">By State</NavDropdown.Item>
            </NavDropdown>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Nav>

          {/* Search Box
<Form inline>
<FormControl type="text" placeholder="Search" className="mr-sm-2" />
<Button variant="outline-success">Search</Button>
</Form>
*/}
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
