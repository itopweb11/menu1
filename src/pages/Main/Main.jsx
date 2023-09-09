import React from 'react';
import "./Main.scss"
import {mainData} from "./data";
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className="main">
            <div className="main__container">
                {mainData.map((elem, i) => {
                    return (
                        <Link key={i} to={elem.link}>
                            <div key={i} className='main__container_item'>
                                <img src={elem.img} alt="icon"/>
                                <p>{elem.desc}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Main;
