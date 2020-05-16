import React from 'react'
import {Container} from 'react-bootstrap'

export default function About() {
  return (
    <div>
      <Container className="container justify-content-md-center">
        <div className="ContainerFull">
          <h1 align="center" className="titleMargin">
            About Us
          </h1>
          <div>
            Local Option was founded during the Covid 19 crisis of 2020. We believe that
            all businesses are essential. As government bailouts occurred, many small
            businesses were forced to fight to stay in businesses and unfortunately some
            were not able to weather the storm. Although the Covid crisis raised awareness
            of the importance of shopping local, we wanted to make sure that the need to
            shop local is never forgotten. We wanted to put a system in place to provide
            free exposure to locally owned and operated businesses so that they can grow
            and continue their legacies.
          </div>
          <br></br>
          <div>
            There are roughly 30 million small businesses in the U.S. and our team is
            committed to adding all small businesses to our website and expanding our
            borders. If you are aware of a small business that has not yet been added to
            our site, please feel free to email us at alskdj@test.com. Every business is
            important and we want to make sure they are featured here.
          </div>
        </div>
      </Container>
    </div>
  )
}
