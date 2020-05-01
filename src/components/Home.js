import React from 'react'
import {Link} from 'react-router-dom'
import Video from './Video'
import {Container, Row, Col} from 'react-bootstrap'
import {Form, FormControl, Button} from 'react-bootstrap'

import Shop_Small_Image from '../Photo/Shop_Small.jpg'
import Support_Local from '../Photo/Support_Local.png'


export default function Home() {
  /* Video for Home Page Background */

  return (
    <div>
      <Row className="">
        <Col lg={6} md={12}>
          <Container style = {{height:"calc(100vh - 65px)"}} className="containerFull justify-content-md-center text-center">
          <img src={Shop_Small_Image} className="homepage-hero-image" />
          <img src={Support_Local} className="homepage-hero-text" />
          </Container>
        </Col>

        <Col lg={6} md={12}>
          <Container style = {{height:"calc(100vh - 65px)"}} className="aligncenter">
          <h2>Support each other with your Local Option
          </h2>
          <br />
          <Form inline>
              <FormControl type="text" placeholder="City, State or Zipcode" className="mr-sm-2" />
              <Button variant="outline-dark">Search</Button> <Button variant="outline-primary"> Near Me</Button>
            </Form>
          </Container>
        </Col>
        </Row>


{/* Need to add pagging */}
        <br /><br /><br />

<Container>
  <Row>
    <Col lg={4} md={4} sm={10} className="text-center">
      <h3>Local Treasures</h3>
      Find the hidden gems inside any city. From antique shops to restaurants, find what you are looking for
    </Col>

    <Col lg={4} md={4} sm={10} className="text-center">
      <h3>Supporting the Community</h3>
      We believe buying locally is the best way to support the local community. A stronger local community means a better quality of life for all.
    </Col>

    <Col lg={4} md={4} sm={10} className="text-center">
      <h3>Reinvest Cycle</h3>
      From sponsoring little leagues to funding public events for all, our local options give back. Investing in them, is investing in so much more.
    </Col>
</Row>
</Container>
        <br />
      


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
