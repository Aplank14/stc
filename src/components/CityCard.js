import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'

const CityCard = ({city}) => {
  return (
    <Link to={`/city/${city.City}`}>
      <Card className="text-center">
        <Card.Body>
          <div>{city.City}</div>
          <div>12</div>
          <div>Busses</div>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default CityCard
