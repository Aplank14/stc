import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CityCard from './CityCard.js'

export default function State() {
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState([])



  let {id} = useParams()
  id = parseInt(id)

  useEffect(() => {
    async function fetchData() {
      const url = `http://${process.env.REACT_APP_API_URL}/city`
      const response = await fetch(url)
      let data = await response.json()
      setCities(data)
      setLoading(false)
    }
    fetchData()
  }, [id])

  if (loading) {
    return <div>loading...</div>
  }

  if (!cities) {
    return <div>didn't get any Cities</div>
  }

  const cityPages = cities.map((city, i) => {
    return <CityCard key={i} city={city}></CityCard>
  })

  return (
    <div>
      <Container className="containerFull justify-content-md-center text-center">
        <h1 className="titleMargin">{cities.State} Cities</h1>
        <Row className="">{cityPages}</Row>
      </Container>
      <br></br>
    </div>
  )
}
