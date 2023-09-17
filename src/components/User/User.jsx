import React from 'react';
import Icon from '../../assets/images/header/icon.png'
import "./User.scss"
import {useSelector} from "react-redux";

const User = ({setPersonal}) => {
    return (
        <div className="user">
            <img onClick={() => setPersonal(true)} className="user__container_icon" src={Icon} alt="Icon"/>
        </div>
    );
};

export default User;
