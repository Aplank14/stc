import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Container, Row, Col, ListGroup} from 'react-bootstrap'

export default function Nearby() {
  const [loading, setLoading] = useState(true)
  const [nearby, setNearby] = useState([])
  const [coordinates, setCoordinates] = useState([{}])

  useEffect(() => {
    const getPosition = options => {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
      })
    }

    const sortByDist = (businesses, position) => {
      businesses = businesses.map(element => {
        element.dist = calculateDistance(
          position.latitude,
          position.longitude,
          element.latitude,
          element.longitude
        )
        return element
      })
      businesses.sort((a, b) => a.dist - b.dist)
      console.log(businesses)
      return businesses
    }

    async function fetchData() {
      // TODO: Switch endpoint to refrence /nearby
      const url = `http://${process.env.REACT_APP_API_URL}/business`
      const response = await fetch(url)
      let position = await getPosition()
      setCoordinates({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
      let data = await response.json()
      data = sortByDist(data, position.coords)
      setNearby(data)
      setLoading(false)
    }
    fetchData()
  }, [])

  useEffect(() => {}, [coordinates])

  function calculateDistance(lat1, lon1, lat2, lon2) {
    var radlat1 = (Math.PI * lat1) / 180
    var radlat2 = (Math.PI * lat2) / 180
    var theta = lon1 - lon2
    var radtheta = (Math.PI * theta) / 180
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta)
    dist = Math.acos(dist)
    dist = (dist * 180) / Math.PI
    dist = dist * 60 * 1.1515
    return dist
  }

  if (loading) {
    return <div>loading...</div>
  }

  if (!nearby) {
    return <div>didn't get any City Information</div>
  }

  const pages = nearby.map(element => {
    return (
      <ListGroup.Item as="li" key={element.idBusinesses}>
        <Container>
          <Row>
            <Col sm={8}>
              <h4>
                <Link to={`/business/${element.idBusinesses}`}>{element.BusName}</Link>
              </h4>
              <p>
                {element.Type} - {element.Category && <span>{element.Category}</span>},{' '}
                {element.Subcategory && <span>{element.Subcategory}</span>}
                <br />
                {element.Address}
                <br />
                {element.Phone}
                <br />
              </p>
            </Col>
            <Col sm={4}>Website &emsp; Address</Col>
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
      <Container className="py-2">
        <ListGroup as="ul">{pages}</ListGroup>
      </Container>
    </div>
  )
}
