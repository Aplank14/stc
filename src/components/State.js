import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CityCard from './CityCard.js'

export default function State() {
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState([])

  let {State} = useParams()

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_API_URL}/cityCount`
      const response = await fetch(url)
      let data = await response.json()
      data.sort((a,b) =>  b.Count - a.Count)
      setCities(data)
      setLoading(false)
    }
    fetchData()
  }, [State])

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
