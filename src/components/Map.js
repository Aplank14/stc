import React from 'react'
import {Container} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import USAMap from "react-usa-map";

export default function StateMap () {
  const history = useHistory();

  const mapHandler = (event) => {
    history.push(`/state/${event.target.dataset.name}`)
  };
   
  return (
    <Container>
      <div className="App">
        <USAMap onClick={mapHandler} />
      </div>
    </Container>
  );

}
