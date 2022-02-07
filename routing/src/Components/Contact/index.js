import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
const Contact = () => {
    const navigate = useNavigate();
    const onBtnClick = () =>{
        navigate("/");
    };
    return(
        <div>
            <Navigation/>This is Contact
            <h3> This is Contact Page</h3>
            <button onClick={onBtnClick}>Redirect Home</button>
        </div>
    )
}
export default Contact;