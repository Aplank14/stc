import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Col} from 'react-bootstrap'
import Restaurant from './../Photo/restaurant.png'

const BusinessCard = ({business}) => {
  return (
    <Col lg={3} md={6} sm={8}>
      <Card>
        <Card.Img variant="top" alt={business.type} src={Restaurant} />
        <Card.Body>
          <Card.Title>
            <Link to={`/business/${business.idBusinesses}`}>{business.BusName}</Link>
          </Card.Title>
          <Card.Body>
            {business.Rating}
            {business.Type}
            {business.Address}
          </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default BusinessCard
