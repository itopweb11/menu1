import React from 'react';
import {barData} from "./data";
import {Link} from "react-router-dom";
import BarLogo from './img/barLogo.png'
import './Bar.scss'

const Bar = () => {
    return (
        <div className="bar">
            <div className="bar__container">
                {barData.map(elem => {
                    return(
                        <Link to={elem.link}>
                            <div key={elem.id} className="bar__container_item">
                                <p className="bar__container_item_desc">{elem.desc}</p>
                            </div>
                        </Link>
                    )
                })}
                <img src={BarLogo} alt=""/>
            </div>
        </div>
    );
};

export default Bar;
