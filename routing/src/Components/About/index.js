import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
const About = () => {
    const navigate = useNavigate();
    const onBtnClick = () => {
        navigate("/");
    };
    return(
        <div>
            <Navigation/>This is About
            <button onClick={onBtnClick}>Redirect to Home</button>
        </div>
    )
}
export default About;