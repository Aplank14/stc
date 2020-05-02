import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Container, Row, Col, Media, ListGroup} from 'react-bootstrap'

export default function Nearby() {
  const [loading, setLoading] = useState(true)
  const [nearby, setNearby] = useState([])

  useEffect(() => {
    async function fetchData() {
      const url = `http://${process.env.REACT_APP_API_URL}/nearby`
      const response = await fetch(url)
      let data = await response.json()
      setNearby(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>loading...</div>
  }

  if (!nearby) {
    return <div>didn't get any City Information</div>
  }

  const pages = Nearby.map(element => {
    return (
        <ListGroup.Item as="li" key={element.idBusinesses}>
          <Container>
            <Row>
              <Col sm={8}>
              <h4><Link to={`/business/${element.idBusinesses}`}>{element.BusName}</Link></h4>
              <p>
              {element.Type} - {element.Category && (
                <span>
                  {element.Category}
                </span>
              )}, {element.Subcategory && (
                <span>
                  {element.Subcategory}
                </span>
              )}
              
              <br />
              {element.Address}<br />
              {element.Phone}<br />
              </p>
              </Col>
              <Col sm={4}>
                Website
                &emsp;
                Address
              </Col>
            </Row>
          </Container>
        </ListGroup.Item>
    )
  })

  return (
    <div className="containerFull">
      <h1 align="center" className="titleMargin">
        Nearby
      </h1>
      <Container className='py-2'>
        <ListGroup as="ul">
          {pages}
        </ListGroup>
      </Container>
    </div>
  )
}
