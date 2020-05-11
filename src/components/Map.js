import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import USAMap from 'react-usa-map'

export default function StateMap() {
  const history = useHistory()

  const mapHandler = event => {
    history.push(`/state/${event.target.dataset.name}`)
  }

  return (

    
    <Container className="mw-100 justify-content-md-center text-center">

      <span className="containerFull">
      <h1 align="center" className="titleMargin">
        <span>Map</span>
      </h1>
      </span>
      <div className="App">
        <USAMap onClick={mapHandler} />
      </div>

      <Row>
        <Col lg={6} md={6} xs={12}>
          Alabama
        </Col>
        <Col lg={7} md={7} xs={12}>
          Alaska
        </Col>
        <Col lg={7} md={7} xs={12}>
          Arizona
        </Col>
        <Col lg={7} md={7} xs={12}>
          Arkansas
        </Col>
        <Col lg={7} md={7} xs={12}>
          California
        </Col>
        <Col lg={7} md={7} xs={12}>
          Colorado
        </Col>
        <Col lg={7} md={7} xs={12}>
          Connecticut
        </Col>
        <Col lg={7} md={7} xs={12}>
          Delaware
        </Col>
        <Col lg={7} md={7} xs={12}>
          Florida
        </Col>
        <Col lg={7} md={7} xs={12}>
          Georgia
        </Col>
        <Col lg={7} md={7} xs={12}>
          Hawaii
        </Col>
        <Col lg={7} md={7} xs={12}>
          Idaho
        </Col>
        <Col lg={7} md={7} xs={12}>
          Illinois
        </Col>
        <Col lg={7} md={7} xs={12}>
          Indiana
        </Col>
        <Col lg={7} md={7} xs={12}>
          Iowa
        </Col>
        <Col lg={7} md={7} xs={12}>
          Kansas
        </Col>
        <Col lg={7} md={7} xs={12}>
          Kentucky
        </Col>
        <Col lg={7} md={7} xs={12}>
          Louisiana
        </Col>
        <Col lg={7} md={7} xs={12}>
          Maine
        </Col>
        <Col lg={7} md={7} xs={12}>
         
          Maryland
        </Col>
        <Col lg={7} md={7} xs={12}>
          Massachusetts
        </Col>
        <Col lg={7} md={7} xs={12}>
          Michigan
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Minnesota
        </Col>
        <Col lg={7} md={7} xs={12}>
          Mississippi
        </Col>
        <Col lg={7} md={7} xs={12}>
          Missouri
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Montana
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Nebraska
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Nevada
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          New Hampshire
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          New Jersey
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          New Mexico
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          New York
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          North Carolina
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          North Dakota
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Ohio
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Oklahoma{' '}
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Oregon{' '}
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Pennsylvania{' '}
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Rhode Island
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          South Carolina
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          South Dakota
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Tennessee
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Texas
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Utah
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Vermont
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Virginia
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Washington
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          West Virginia
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Wisconsin
        </Col>
        <Col lg={7} md={7} xs={12}>
          {' '}
          Wyoming
        </Col>
      </Row>
    </Container>
  )
}
