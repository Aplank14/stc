import React from 'react'
import {Link} from 'react-router-dom'
import Video from './Video'
import {Container, Row, Col} from 'react-bootstrap'
import Shop_Small_Image from '../Photo/Shop_Small.jpg'
import Support_Local from '../Photo/Support_Local.png'

export default function Home() {
  /* Video for Home Page Background */

  return (
    <div>
      <Row className="">
        <Col lg={6} md={12}>
          <Container style = {{height:"100vh"}} className="containerFull justify-content-md-center text-center">
          <img src={Shop_Small_Image} className="homepage-hero-image" />
          <img src={Support_Local} className="homepage-hero-text" />
          </Container>
        </Col>

        <Col lg={6} md={12}>
          <div>Test 2
            <br></br><br></br><br></br><br></br>
          </div>
        </Col>
      </Row>


      <h1 align="center" className="titleMargin">
        Our Mission
      </h1>
      <div>
        Bring awareness to the businesses inside your community, what they serve, and when
        they are open with ease.
      </div>
      <br></br>
      <div>We are the best around. We are never gonna let you down. We're the best!</div>
    </div>
  )
}
