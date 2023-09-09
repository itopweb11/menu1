import React from 'react';
import './LoginActive.scss'
import Vector from '../../assets/images/Login/Vector.png'
import {Link} from "react-router-dom";
const LoginActive = ({desc}) => {
    return (
        <Link className="loginActive" to={"/"}>
            <img src={Vector} alt="icon"/>
            <p>{desc}</p>
        </Link>
    );
};

export default LoginActive;
