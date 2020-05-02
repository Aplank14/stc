import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Col} from 'react-bootstrap'
import Restaurant from './../Photo/restaurant.png'

const BusinessCard = ({business}) => {
  return (
    <Col lg={3} md={4} sm={6}>
      <Link to={`/business/${business.idBusinesses}`}><Card>
        <Card.Img variant="top" alt={business.type} src={Restaurant}/>
        <Card.Body>
          <Card.Title>
            <h5>
            {business.BusName}
            </h5>
          </Card.Title>
          <Card.Body>
            {business.Rating}
            {business.Type}
            {business.Category && (
                          <span>
                            &nbsp;- {business.Category}
                          </span>
                        )}

                        {business.Subcategory && (
                          <span>
                            , {business.Subcategory}
                          </span>
                        )}
                        <br />
            {business.Address}
          </Card.Body>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  )
}

export default BusinessCard
