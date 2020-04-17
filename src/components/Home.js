import React from "react";
import { Link } from 'react-router-dom';


export default class Home extends React.Component {
    state = {
      loading: true,
      Home: null
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

        /* Video for Home Page Background */
        const videoSource = "https://grangerchurch.com/wp-content/uploads/2019/10/Web-Loop-Oct2019.mp4"


        return (
            <div>



                    <div className="ContainerFull">
                    <Link to="/Cities">
                        <video autoPlay="autoplay" loop="loop" muted className="Video" >
                        <source src={videoSource} type="video/mp4" />
                        </video>
                     </Link>
                    </div>
            




                <h1>Businesses</h1>
                <div>Our Mission is to bring awareness to the businesses inside your community, what they serve, and when they are open with ease.</div>
                <br></br>
                <div>We are the best around. We are never gonna let you down. We're the best!</div>
            
            
            
            
            
            
            
            
            
            
            
            </div>
        );
    }
  }