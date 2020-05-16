import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {useHistory, Link} from 'react-router-dom'
import USAMap from 'react-usa-map'
import states from '../utils/states.json'

export default function StateMap() {
  const history = useHistory()

  const mapHandler = event => {
    history.push(`/state/${event.target.dataset.name}`)
  }

  let stateLinks = []
  for (const abbrev in states) {
    stateLinks.push(
      <div key={abbrev}>
        <Link to={'/state/'+ abbrev}>
            {states[abbrev]}
        </Link>
      </div>
    )
  }
  const lastStates = stateLinks.splice(25, 25)

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
      <Container className="mw-60">
      <Row>
        <Col xs={12} md={6}>
          {stateLinks}      
        </Col>
        <Col cs={12} md={6}>
          {lastStates}      
        </Col>
      </Row>
      </Container>
    </Container>
  )
}
