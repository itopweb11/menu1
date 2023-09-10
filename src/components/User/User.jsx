import React from 'react';
import Icon from '../../assets/images/header/icon.png'
import "./User.scss"
import {useSelector} from "react-redux";

const User = () => {
    return (
        <div className="user">
            <img className="user__container_icon" src={Icon} alt="Icon"/>
        </div>
    );
};

export default User;
