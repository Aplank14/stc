import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CityCard from './CityCard.js'
import states from '../utils/states.json'

export default function State() {
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState([])
  const [stateName, setStateName] = useState([])

  let {id} = useParams()

  useEffect(() => {
    async function fetchData() {
      if(!states.hasOwnProperty(id)){
        return
      }
      setStateName(states[id])
      const url = `${process.env.REACT_APP_API_URL}/state/${id}`
      const response = await fetch(url)
      if (response.status!==200) {
        return
      }
      let data = await response.json()
      data.sort((a,b) =>  b.Count - a.Count)
      setCities(data)
      setLoading(false)
    }
    fetchData()
  }, [id])

  if (loading) {
    return <div>loading...</div>
  }

  let cityPages = (<Col><h5>No cities have been entered</h5></Col>)

  if (cities.length!==0) {
    cityPages = cities.map((city, i) => {
      return <CityCard key={i} city={city}></CityCard>
    })
  }

  return (
    <div>
      <Container className="containerFull justify-content-md-center text-center">
        <h1 className="titleMargin">{stateName} Cities</h1>
        <Row className="">{cityPages}</Row>
      </Container>
      <br></br>
    </div>
  )
}
