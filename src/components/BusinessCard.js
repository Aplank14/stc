import React from 'react'
import {Link} from 'react-router-dom'
import {Card, Col, Image} from 'react-bootstrap'
import BusinessThumbnail from './BusinessThumbnail'

const BusinessCard = ({business}) => {

  return (
    <Col lg={3} md={4} xs={6} className="p-0 p-md-1 flex-grow-1">
      <Link to={`/business/${business.idBusinesses}`} className="linkBlack " style={{ textDecoration: 'none' }}>
        <Card className="h-100">
          <Card.Header>
            <Image
              src={BusinessThumbnail(business.Type, business.Premium, business.BusName)}
              rounded
              width={92}
              height={92}
            />
          </Card.Header>
          <Card.Body>
            
            <Card.Body className="p-0 p-md-2">
              <h5>{business.BusName}</h5>
              {business.Rating}4.5 ★ <br/>
              {business.Type}
              {business.Category && <span>&nbsp;- {business.Category}</span>}

              {business.Subcategory && <span>, {business.Subcategory}</span>}
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
