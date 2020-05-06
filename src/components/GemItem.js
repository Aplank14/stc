import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Media} from 'react-bootstrap'
import BusinessThumbnail from './BusinessThumbnail'

export default function GemItem({business}, {i}) {
  console.log(business)
  return (
    <Col sm={12} key={business.idBusinesses}>
      <Link to={`/business/${business.idBusinesses}`} className="linkBlack">
        <Media>
          {/* NEED TO ALIGN VERTICAL CENTER */}
          <span className="mr-3 verticalcenter">
            <img
              width={92}
              height={92}
              src={BusinessThumbnail(business.Type, business.Premium, business.BusName)}
              alt="Generic placeholder"
            />
          </span>

          <Media.Body className="text-left">
            <Container className="py-2">
              <Row>
                <Col lg={7} md={7} sm={12}>
                  <h5>{business.BusName} &emsp; 4.5 ★ &emsp;</h5>
                  <p>
                    {business.Type}
                    {business.Category && <span>&nbsp;- {business.Category}</span>}
                    {business.Subcategory && <span>, {business.Subcategory}</span>}
                    <br></br>
                    {business.Business_Description} Insert Business Description Here
                  </p>
                </Col>

                <Col lg={5} md={5} sm={12}>
                  Address: {business.Address} <br />
                  {business.Phone && (
                    <span>Phone: {business.Phone}
                    </span>
              )}
                  <Row>
                    <Col>
                      <h5>25 Years</h5>
                    </Col>
                    <Col>
                      <h5>#{i} Local option</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Media.Body>
        </Media>
      </Link>
    </Col>
  )
}
