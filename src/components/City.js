import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {Container, Row} from 'react-bootstrap'
import BusinessCard from './BusinessCard'
import GemItem from './GemItem'

export default function City() {
  const [loading, setLoading] = useState(true)
  const [businesses, setBusinesses] = useState([])
  const [gems, setGems] = useState([])

  let {city} = useParams()

  useEffect(() => {
    async function fetchData() {
      const url = `${process.env.REACT_APP_API_URL}/business`
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

  const gemItem = gems.map((element, i) => {
    return <GemItem key={i} i={i + 1} business={element}></GemItem>
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

        <Row>{gemItem}</Row>

        <h2>Businesses</h2>

        <Row className="">{businessCards}</Row>
      </Container>
    </div>
  )
}
