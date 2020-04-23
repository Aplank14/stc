import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Col} from 'react-bootstrap'

const CityCard = ({city}) => {
  return (
    <Col lg={3} md={6} sm={8}>
      <Link to={`/city/${city.City}`}>
        <Card className="text-center">
          <Card.Body>
            <div className="cityCardCity">{city.City}</div>
            <h3 className="cityCardNumber">12</h3>
            <div className="cityCardLocal">Local Businesses</div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  )
}

export default CityCard
