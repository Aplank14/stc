import React from "react";
import { Link } from 'react-router-dom';

export default class Cities extends React.Component {
    state = {
      loading: true,
      cities: null
    };

    async componentDidMount() {
        const url = `http://${process.env.REACT_APP_API_URL}/city`;
        const response = await fetch(url);
        let data = await response.json();
        this.setState({ cities: data, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.cities) {
            return <div>didn't get any Cities</div>;
        }

        let Cities = this.state.cities.map(element => {
            return (
                <li key={element.City}>
                    <Link to={`/city/${element.City}`}>{element.City}</Link>
                </li>
            );
            
        });

        /*Trying to establish unique Cities only 
        const distinct = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        const distinctCities = Cities.filter(distinct);

        const uniqueCities = [...new this.setState(Cities)]
        */


        return (



            
            <div>
                <h1>Cities</h1>
                <div>{Cities}</div>
            </div>
        );
    }
  }