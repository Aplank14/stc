import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CityCard from './CityCard.js'

export default function State() {
  const [loading, setLoading] = useState(true)
  const [cities, setCities] = useState([])
  const [stateName, setStateName] = useState([])

  const states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
  }

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

  if (!cities) {
    return <div>didn't get any Cities</div>
  }

  const cityPages = cities.map((city, i) => {
    return <CityCard key={i} city={city}></CityCard>
  })

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
