import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

export default function Businesses() {
  const [loading, setLoading] = useState(true)
  const [business, setBusiness] = useState([])

  let {id} = useParams()
  id = parseInt(id)

  useEffect(() => {
    async function fetchData() {
      const url = `http://${process.env.REACT_APP_API_URL}/business/${id}`
      const response = await fetch(url)
      let data = await response.json()
      setBusiness(data[0])
      setLoading(false)
    }
    fetchData()
  }, [id])

  if (loading) {
    return <div>loading...</div>
  }

  if (!business) {
    return <div>didn't get any businesses</div>
  }

  return (
    <div className="containerFull">
      <h2 align="center" className="titleMargin">
        {' '}
        <span>{business.BusName}</span> - <span>{business.City}</span>,{' '}
        <span>{business.State}</span>
      </h2>

      <Container className="col-lg-8 col-md-10 col-sm-12 justify-content-md-center">
        <Row className="justify-content-md-center">
          <div className="col-md-6 col-lg-6 mb-4">
            <div className="">
              Owner: <span>{business.Owner}</span>
            </div>
            <div className="">
              Address: <span>{business.Address}</span>
            </div>
            <div className="">
              <span>{business.City}</span>, <span>{business.State}</span>{' '}
              <span>{business.Zipcode}</span>
            </div>
            <div className="">
              Phone: <span>{business.Owner}</span>
            </div>
            <div>
              {business.Facebook && (
                <span>
                  Facebook: <a href={business.Facebook}>{business.Facebook}</a>
                </span>
              )}
            </div>
            <div>
              {business.Website && (
                <span>
                  Website: <a href={business.Website}>{business.Website}</a>
                </span>
              )}
            </div>
            <div>
              <Link to={'/City/' + business.City}>Nearby Local Businesses</Link>
            </div>
            <br></br>
          </div>

          <div className="col-md-6 col-lg-6 mb-4">
            <div className="align:left">
              Monday: <span className="align:right">{business.Monday_Start}</span> -{' '}
              <span>{business.Monday_Close}</span>
            </div>
            <div className="align:left">
              Tuesday: <span>{business.Tuesday_Start}</span> -{' '}
              <span>{business.Tuesday_Close}</span>
            </div>
            <div className="align:left">
              Wednesday: <span>{business.Wednesday_Start}</span> -{' '}
              <span>{business.Wednesday_Close}</span>
            </div>
            <div className="align:left">
              Thursday: <span>{business.Thursday_Start}</span> -{' '}
              <span>{business.Thursday_Close}</span>
            </div>
            <div className="align:left">
              Friday: <span>{business.Friday_Start}</span> -{' '}
              <span>{business.Friday_Close}</span>
            </div>
            <div className="align:left">
              Saturday: <span>{business.Saturday_Start}</span> -{' '}
              <span>{business.Saturday_Close}</span>
            </div>
            <div className="align:left">
              Sunday: <span>{business.Sunday_Start}</span> -{' '}
              <span>{business.Sunday_Close}</span>
            </div>
          </div>

          <div className="col-lg-12 mb-4">
            <p>Main Paragraph Information</p>
          </div>
        </Row>
      </Container>
    </div>
  )
}
