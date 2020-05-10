import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

export default function NewBusiness() {
  return (
    <div>
      <Container>
        <h1 align="center" className="titleMargin">
          Submit a Business
        </h1>

        <div>
          Fill out the form below to get a business added to our website. Our mission is
          to get every local option added. Submissions will be reviewed and posted to
          website within 24 hours of submission.
        </div>

        <Row>
          <Col lg={6} xs={12}>
            Form Here
          </Col>
          <Col lg={6} xs={12}>
            Other Form Information
          </Col>
        </Row>
      </Container>
    </div>
  )
}
