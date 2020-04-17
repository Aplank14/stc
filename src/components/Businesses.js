import React from "react";
import { Link } from 'react-router-dom';

export default class Businesses extends React.Component {
    state = {
      loading: true,
      businesses: null
    };

    async componentDidMount() {
        const url = "http://localhost:8000/status";
        const response = await fetch(url);
        let data = await response.json();
        this.setState({ businesses: data, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.businesses) {
            return <div>didn't get any businesses</div>;
        }

        let pages = this.state.businesses.map(element => {
            return (
                <li key={element.idBusinesses}>
                    <Link to={`/business/${element.idBusinesses}`}>{element.BusName}</Link>
                </li>
            );
        });

        return (
            <div>
                <h1>Businesses</h1>
                <div>{pages}</div>
            </div>
        );
    }
  }