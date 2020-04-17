import React from "react";
import { Link } from 'react-router-dom';


export default class City extends React.Component {
    state = {
      loading: true,
      city: null
    };

    async componentDidMount() {
        const { match } = this.props
        const { params: { city } } = match;
        const url = "http://localhost:8000/status";
        const response = await fetch(url);
        let data = await response.json();
        data = data.filter(element => element.City === city)
        this.setState({ city: data, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.city) {
            return <div>didn't get any City Information</div>;
        }

        let CityResults = this.state.city.map(element => {
            return (
                <li key={element.idBusinesses}>
                    <Link to={`/business/${element.idBusinesses}`}>{element.BusName}</Link>
                </li>
            );
        });

        return (
            <div className="containerFull">
                {CityResults}
               </div>
        );
    }
  }