import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function City() {
  const [loading, setLoading] = useState(false)
  const [businesses, setBusinesses] = useState([])

  let {city} = useParams()

  useEffect(() => {
    async function fetchData() {
      const url = `http://${process.env.REACT_APP_API_URL}/business`
      const response = await fetch(url)
      let data = await response.json()
      data = data.filter(element => element.City === city)
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

  let CityResults = businesses.map(element => {
    return (
      <li key={element.idBusinesses}>
        <Link to={`/business/${element.idBusinesses}`}>{element.BusName}</Link>
      </li>
    )
  })

  return (
    <div className="containerFull">
      <h1 align="center">
        <span>{city}</span>
      </h1>
      {CityResults}
    </div>
  )
}
