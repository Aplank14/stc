import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

const CityCard = ({city}) => {
  return (
    <Link to={`/city/${city.City}`}>
      <Card className="text-center col-lg-3 col-md-6 col-sm-8">
        <Card.Body>
          <div>{city.City}</div>
          <h3>12</h3>
          <div>Local Businesses</div>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CityCard
