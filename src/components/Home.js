import React from 'react'
import {Link} from 'react-router-dom'
import Video from './Video'

export default function Home() {
  /* Video for Home Page Background */

  return (
    <div>
      <div className="ContainerFull">
        <Link to="/Cities">
          <Video />
        </Link>
      </div>

      <h1 align="center" className="titleMargin">
        Our Mission
      </h1>
      <div>
        Bring awareness to the businesses inside your community, what they serve, and when
        they are open with ease.
      </div>
      <br></br>
      <div>We are the best around. We are never gonna let you down. We're the best!</div>
    </div>
  )
}
