import React from 'react'
import {Container, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Business extends React.Component {
  state = {
    loading: true,
    business: null,
  }

  async componentDidMount() {
    const {match} = this.props
    let {
      params: {id},
    } = match
    const url = `http://${process.env.REACT_APP_API_URL}/business`
    const response = await fetch(url)
    let data = await response.json()
    id = parseInt(id)
    data = data.find(element => element.idBusinesses === id)
    this.setState({business: data, loading: false})
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.business) {
      return <div>didn't get any businesses</div>
    }

    return (
      <div className="containerFull">
        <br></br>
        <h2 align="center">
          {' '}
          <span>{this.state.business.BusName}</span> -{' '}
          <span>{this.state.business.City}</span>,{' '}
          <span>{this.state.business.State}</span>
        </h2>

        <Container className="col-lg-8 col-md-10 col-sm-12 justify-content-md-center">
          <Row className="justify-content-md-center">
            <div className="col-md-6 col-lg-6 mb-4">
              <br></br>
              <div className="">
                Owner: <span>{this.state.business.Owner}</span>
              </div>
              <div className="">
                Address: <span>{this.state.business.Address}</span>
              </div>
              <div className="">
                <span>{this.state.business.City}</span>,{' '}
                <span>{this.state.business.State}</span>{' '}
                <span>{this.state.business.Zipcode}</span>
              </div>
              <div className="">
                Phone: <span>{this.state.business.Owner}</span>
              </div>
              <div>
                {this.state.business.Facebook && (
                  <span>
                    Facebook:{' '}
                    <a href={this.state.business.Facebook}>
                      {this.state.business.Facebook}
                    </a>
                  </span>
                )}
              </div>
              <div>
                {this.state.business.Website && (
                  <span>
                    Website:{' '}
                    <a href={this.state.business.Website}>
                      {this.state.business.Website}
                    </a>
                  </span>
                )}
              </div>
              <div>
                <Link to={'/City/' + this.state.business.City}>Local Businesses</Link>
              </div>
              <br></br>
            </div>

            <div className="col-md-6 col-lg-6 mb-4">
              <div className="card">
                <div className="align:left">
                  Monday:{' '}
                  <span className="align:right">{this.state.business.Monday_Start}</span>{' '}
                  - <span>{this.state.business.Monday_Close}</span>
                </div>
                <div className="align:left">
                  Tuesday: <span>{this.state.business.Tuesday_Start}</span> -{' '}
                  <span>{this.state.business.Tuesday_Close}</span>
                </div>
                <div className="align:left">
                  Wednesday: <span>{this.state.business.Wednesday_Start}</span> -{' '}
                  <span>{this.state.business.Wednesday_Close}</span>
                </div>
                <div className="align:left">
                  Thursday: <span>{this.state.business.Thursday_Start}</span> -{' '}
                  <span>{this.state.business.Thursday_Close}</span>
                </div>
                <div className="align:left">
                  Friday: <span>{this.state.business.Friday_Start}</span> -{' '}
                  <span>{this.state.business.Friday_Close}</span>
                </div>
                <div className="align:left">
                  Saturday: <span>{this.state.business.Saturday_Start}</span> -{' '}
                  <span>{this.state.business.Saturday_Close}</span>
                </div>
                <div className="align:left">
                  Sunday: <span>{this.state.business.Sunday_Start}</span> -{' '}
                  <span>{this.state.business.Sunday_Close}</span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}
