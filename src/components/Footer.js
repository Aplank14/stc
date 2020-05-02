import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="containerFull footerBackground">
        <Container className="footerPadding">
          <br></br>
          <Row>
            <Col xs={12} md={3}>
              <div className="footerTitle">Company</div>
              <div className="footerBody">
                <Link to="/about">About</Link>
              </div>
              <div className="footerBody">Blog</div>
              <div className="footerBody">Get Involved</div>
            </Col>

            <Col xs={12} md={3}>
              <div className="footerTitle">Local Options</div>
              <div className="footerBody">Beta Test</div>
              <div className="footerBody">Help Document</div>
              <div className="footerBody">Tools</div>
            </Col>

            <Col xs={12} md={3}>
              <div className="footerTitle">Resources</div>
              <div className="footerBody">Privacy</div>
              <div className="footerBody">Contact</div>
            </Col>
            <Col xs={12} md={3}>
              <div className="footerTitle">Product Help</div>
              <div className="footerBody">Support</div>
              <div className="footerBody">File a Bug</div>
              <div className="footerBody">Business Update</div>
            </Col>
          </Row>

          <br></br>
          <br></br>
          <div align="center" className="footerCopyright">
            © 2020 Local Options
          </div>
          <br></br>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
