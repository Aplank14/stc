import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Media} from 'react-bootstrap'
import BusinessThumbnail from './BusinessThumbnail'

export default function GemItem({business, i}) {
  let d = new Date()
  let year = d.getFullYear()
  let years = false
  if (business.Start_Year) {
    years = year - business.Start_Year + ' Years'
  }
  let desc = business.Business_Description
  if (desc && desc.length > 140) {
    let split = business.Business_Description.slice(0, 140).lastIndexOf(' ')
    desc = business.Business_Description.slice(0, split) + '...'
  }

  console.log(business)
  return (
    <Col sm={12} key={business.idBusinesses}>
      <Link to={`/business/${business.idBusinesses}`} className="linkBlack">
        <Media>
          {/* NEED TO ALIGN VERTICAL CENTER */}
          <img
            width={92}
            height={92}
            className="align-self-center"
            src={BusinessThumbnail(business.Type, business.Premium, business.BusName)}
            alt="Generic placeholder"
          />
          <Media.Body className="text-left">
            <Container className="py-2">
              <Row>
                <Col lg={8} md={8} sm={12}>
                  <h5>#{i} - {business.BusName}</h5>
                </Col>

                <Col lg={2} md={2} xs={4}>
                  <span>4.5 ★</span>
                </Col>
                  
                <Col lg={2} md={2} xs={8}>
                  <span>
                    {years}
                  </span>
                </Col>
                  

                
                  <Col lg={7} md={7} sm={12}>
                  <span>
                    {business.Type}
                    {business.Category && <span>&nbsp;- {business.Category}</span>}
                    {business.Subcategory && <span>, {business.Subcategory}</span>}
                    
                    <span className="d-none d-md-block">{desc}</span>
                  </span>
                </Col>
                <Col lg={5} md={5} sm={12} className="">
                  Address: {business.Address} <br />
                  {business.Phone && <span>Phone: {business.Phone}</span>}
                  {/* <Row className="text-center">
                    {years &&
                      <Col>
                        <h5>{years}</h5>
                      </Col>
                    }
                      <Col>
                        <h5>#{i}</h5>
                      </Col>
                  </Row> */}
                </Col>
              </Row>
            </Container>
          </Media.Body>
        </Media>
      </Link>
    </Col>
  )
}
