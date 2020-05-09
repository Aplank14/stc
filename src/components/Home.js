import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Form, FormControl, Button} from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Shop_Small_Image from '../Photo/Shop_Small.jpg'
import Support_Local from '../Photo/Support_Local_White.png'
import Diamond from './../Photo/Diamond.png'
import Cash_Cycle from './../Photo/Cash_Cycle.png'
import Community_Support from './../Photo/Community_Support_Color.png'

export default function Home() {
  /* Video for Home Page Background */
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = data => {
    if(data.business !== ''){
      history.push(`/business/${data.business}`)
    } else if (data.location !== ''){
      history.push(`/city/${data.location}`)
    } 
    console.log(errors)
  }

  return (
    <div>
      <Row className="">
        <Col lg={6} md={12}>
          <Container
            style={{height: 'calc(100vh - 65px)'}}
            className="containerFull justify-content-md-center text-center"
          >
            <img
              alt="Small shop"
              src={Shop_Small_Image}
              className="homepage-hero-image"
            />
            <img alt="Nickbello" src={Support_Local} className="homepage-hero-text" />
          </Container>
        </Col>

        <Col lg={6} md={12} className="my-auto">
          <Container>
            <h2>Support each other with your Local Option</h2>
            <br />
            <Form inline onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                name="business"
                ref={register({required: false, maxLength: 100})}
              />
              <FormControl
                type="text"
                placeholder="City, State"
                className="mr-sm-2"
                name="location"
                ref={register({required: false, maxLength: 100})}
              />
              <Button type="submit" variant="outline-dark">Search</Button>{' '}
              <Button variant="outline-primary"> Near Me</Button>
            </Form>
          </Container>
        </Col>
      </Row>

      {/* Need to add pagging */}
      <br />
      <br />
      <br />

      <Container>
        <Row>
          <Col lg={4} md={4} sm={10} className="text-center py-2">
            <img src={Diamond} width={120} height={120} alt="Generic placeholder"></img>
            <h3>Local Treasures</h3>
            Find the hidden gems inside any city. From antique shops to restaurants, find
            what you are looking for
          </Col>

          <Col lg={4} md={4} sm={10} className="text-center py-2">
            <img
              src={Community_Support}
              width={120}
              height={120}
              alt="Generic placeholder"
            ></img>
            <h3>Supporting the Community</h3>
            We believe buying locally is the best way to support the local community. A
            stronger local community means a better quality of life for all.
            <br />
          </Col>

          <Col lg={4} md={4} sm={10} className="text-center py-2">
            <img
              src={Cash_Cycle}
              width={120}
              height={120}
              alt="Generic placeholder"
            ></img>
            <h3>Reinvest Cycle</h3>
            From sponsoring little leagues to funding public events for all, our local
            options give back. Investing in them, is investing in so much more.
          </Col>
        </Row>
      </Container>
      <br />

      <div className="bgGrey">
        <Container className="py-2">
          <Row>
            <Col lg={4} sm={12} className="my-auto">
              <h1 align="center" className="titleMargin">
                About Local Option
              </h1>
            </Col>

            <Col lg={8} sm={12} className="my-auto">
              <div>
                <b>Mission:</b> Bring awareness to the businesses inside every community,
                what they offer, and when they are open with ease.
              </div>
              <br></br>
              <div>
                Local Option informs you of all the options inside every community. We
                gather the businesses' important information to help you make the best
                choice. Search by city, type of business, rating, or even if they are open
                now. And did I mention - the reviews are all from local supporters like
                you! Your opinion matters and will help others find the local gems of each
                city. Together we can help the local businesses that have offer the best
                product, give back the most, and have been supporting us.
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="">
        <Container className="py-2">
          <Row>

          <Col lg={8} sm={12} className="my-auto">
              <div>
                <b>Mission:</b> Own a Local Business? Add it <a href="#">Here</a>
              </div>
              
            </Col>
            <Col lg={4} sm={12} className="my-auto">
              <h1 align="center" className="titleMargin">
                Add Local Business HERE
              </h1>
            </Col>

            
          </Row>
        </Container>
      </div>


    </div>
  )
}
