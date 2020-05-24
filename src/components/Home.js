import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Form, FormControl, Button} from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

import Shop_Small_Image from '../Photo/Shop_Small.jpg'
import Support_Local from '../Photo/Support_Local_White.png'
import Diamond from './../Photo/Diamond White Black.png'
import Gems from './../Photo/Gems.png'
import Cash_Cycle from './../Photo/Cash_Cycle.png'
import Community_Support from './../Photo/Community Support v2.png'

export default function Home() {
  /* Video for Home Page Background */
  const {register, handleSubmit, errors} = useForm()
  const history = useHistory()

  const onSubmit = data => {
    if (data.business !== '') {
      history.push(`/business/${data.business}`)
    } else if (data.location !== '') {
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
              <Button type="submit" variant="outline-dark">
                Search
              </Button>{' '}
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
            <img src={Gems} width={120} height={120} alt="Generic placeholder"></img>
            <h3>Local Gems</h3>
            Looking for the best Local Options in each community? The locals know best!
            Find the hidden gems in each category.
          </Col>

          <Col lg={4} md={4} sm={10} className="text-center py-2">
            <img
              src={Community_Support}
              width={120}
              height={120}
              alt="Generic placeholder"
            ></img>
            <h3>Supporting the Community</h3>
            When you shop local, you are supporting your friends, your family and your
            neighbors. Shopping local creates stronger communities and stronger
            communities create a better quality of life.
            <br />
          </Col>

          <Col lg={4} md={4} sm={10} className="text-center py-2">
            <img
              src={Cash_Cycle}
              width={120}
              height={120}
              alt="Generic placeholder"
            ></img>
            <h3>Reinvest</h3>
            When you shop local you are investing in your community. You are supporting
            small businesses who are then supporting local non-profit organizations,
            sponsoring little leagues teams, funding public events and so much more.
            Investing in them means you are investing in so much more.
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
                Local Option is a leading online marketplace with the largest and most
                comprehensive network of small business partners. Local Option exclusively
                features small businesses and is proud to partner with businesses across
                the country. Informing you of all the local options inside every community
                is what we do. Together we can help local businesses that are excelling in
                their field. All of our reviews are from local supporters just like you!
                Your opinion matters and will help others find the local gems in each
                city.
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
                Are you the owner of a small business? We would love to add you to our
                directory and feature your business as a Local Option for consumers. We
                believe that all businesses are essential and we are excited to be able to
                add you to our database at no cost. Please fill out the form to get your
                business listed on our site.
              </div>
            </Col>
            <Col lg={4} sm={12} className="my-auto">
              <h1 align="center" className="titleMargin">
                <Link to="/newBusiness">Add Local Business HERE</Link>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
