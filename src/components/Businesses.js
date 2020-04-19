import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Businesses() {
  const [loading, setLoading] = useState(true)
  const [businesses, setBusinesses] = useState([])

  useEffect(() => {
    async function fetchData() {
      const url = `http://${process.env.REACT_APP_API_URL}/business`
      const response = await fetch(url)
      let data = await response.json()
      setBusinesses(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) {
    return <div>loading...</div>
  }

  if (!businesses) {
    return <div>didn't get any City Information</div>
  }

  const pages = businesses.map(element => {
    return (
      <div key={element.idBusinesses}>
        <Link to={`/business/${element.idBusinesses}`}>{element.BusName}</Link>
      </div>
    )
  })

  return (
    <div className="containerFull">
      <h1 align="center" className="titleMargin">
        Businesses
      </h1>
      <div>{pages}</div>
    </div>
  )
}
