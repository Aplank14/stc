import React from "react";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Businesses() {
    const [loading, setLoading] = useState(false);
    const [businesses, setBusinesses] = useState([]);

    async function fetchData() {
        const url = `http://${process.env.REACT_APP_API_URL}/status`;
        const response = await fetch(url);
        let data = await response.json();
        setBusinesses(data);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    });
  
    if (loading) {
        return <div>loading...</div>;
    }

    if (!businesses) {
        return <div>didn't get any City Information</div>;
    }

    let pages = businesses.map(element => {
        return (
            <li key={element.idBusinesses}>
                <Link to={`/business/${element.idBusinesses}`}>{element.BusName}</Link>
            </li>
        );
    });

    return (
        <div className="containerFull">
            <h1 align="center">Businesses</h1>
            <div>{pages}</div>
        </div>
    );

}