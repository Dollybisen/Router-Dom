import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return(
        <div>
            <h1> This is my Home Page</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    )
}
export default Home;