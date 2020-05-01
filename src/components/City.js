import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Container, Row, Col, Media} from 'react-bootstrap'
import BusinessCard from './BusinessCard'
import Photo from './../Photo/download.svg'

export default function City() {
  const [loading, setLoading] = useState(true)
  const [businesses, setBusinesses] = useState([])
  const [gems, setGems] = useState([])

  let {city} = useParams()

  useEffect(() => {
    async function fetchData() {
      const url = `http://${process.env.REACT_APP_API_URL}/business`
      const response = await fetch(url)
      let data = await response.json()
      data = data.filter(element => element.City === city)
      data.sort((a, b) => a.Rating - b.Rating)
      setGems(data.splice(0, 3))
      setBusinesses(data)
      setLoading(false)
    }

    fetchData()
  }, [city])

  if (loading) {
    return <div>loading...</div>
  }

  if (!businesses) {
    return <div>didn't get any City Information</div>
  }

  console.log(gems)

  const gemCard = gems.map((element, i) => {
    console.log(element)
    return (
      <Col sm={12} key={element.idBusinesses}>
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src={Photo}
            alt="Generic placeholder"
          />
          <Media.Body className="text-left">
            <Container>
              <Row>
                <Col sm={7}>
                  <h5>{element.BusName} &emsp; Rating: 4.5 &emsp;</h5>
                  <p>
                    {element.Type} <br></br>
                    {element.Business_Description} lorem ipsum dolor
                  </p>
                </Col>
                <Col sm={5}>
                  <Container>
                    Address: {element.Address} <br></br>
                    <Row className="py-2">
                      <Col>25 Years</Col>
                      <Col>#{i + 1} Local option</Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Media.Body>
        </Media>
      </Col>
    )
  })

  const businessCards = businesses.map((element, i) => {
    return <BusinessCard key={i} business={element}></BusinessCard>
  })

  return (
    <div className="containerFull">
      <h1 align="center" className="titleMargin">
        <span>{city}</span>
      </h1>
      <Container className="container justify-content-md-center text-center">
        <h3>Local Gems</h3>
        <Row>{gemCard}</Row>
        <h3>Businesses</h3>
        <Row className="">{businessCards}</Row>
      </Container>
    </div>
  )
}
