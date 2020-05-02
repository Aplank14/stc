import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Container, Row, Col, Media} from 'react-bootstrap'
import BusinessCard from './BusinessCard'
import Photo from './../Photo/download.svg'
import Restaurant from './../Photo/restaurant.png'

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

{/* NEED TO ALIGN VERTICAL CENTER */}
          <span className="mr-3 verticalcenter">
            <img
            width={92}
            height={92}
            src={Restaurant}
            alt="Generic placeholder"
          />
          </span>

          <Media.Body className="text-left">
            <Container className="py-2">
              <Row>
                <Col lg={7} md={7} sm={12}>
                  <h5>{element.BusName} &emsp; 4.5 ★ &emsp;</h5>
                  <p>
                    {element.Type}   
                        {element.Category && (
                          <span>
                            &nbsp;- {element.Category}
                          </span>
                        )}

                        {element.Subcategory && (
                          <span>
                            , {element.Subcategory}
                          </span>
                        )}
                    
                    
                    <br></br>
                    {element.Business_Description} Insert Business Description Here
                  </p>
                </Col>
                
                <Col lg={5} md={5} sm={12}>
                  
                     Address: {element.Address} 
                    <Row>
                      <Col><h5>25 Years</h5></Col>
                      <Col><h5>#{i + 1} Local option</h5></Col>
                    </Row>
                  
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
        <h2>Local Gems</h2>

        <Row>
          {gemCard}
        </Row>

        <h2>Businesses</h2>

        <Row className="">
          {businessCards}
        </Row>
      </Container>
    </div>
  )
}
