import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar className="headerBackground" expand="lg">
        <Navbar.Brand>
          <Link to="/" className="linkOrange">Helping Out Our Local Business</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/"><div className="headerTitle">Home</div></Nav.Link>
            <Nav.Link to="/"><div className="headerTitle">About Us</div></Nav.Link>
            <span className="headerTitle">
            <NavDropdown style={{ tintColor: 'white' }} title="Search" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="/business">By Business</NavDropdown.Item>
              <NavDropdown.Item href="/city">By Location</NavDropdown.Item>

              {/* Split Drop Down
   <NavDropdown.Divider />
   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
   */}
            </NavDropdown>
            </span>
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
