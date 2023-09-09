import React from 'react';
import {Link} from "react-router-dom";
import {banquetData} from "./data";
import "./Banquet.scss"
const Banquet = () => {
    return (
        <div className="banquet">
            <div className="banquet__container">
                {banquetData.map(elem => {
                    return(
                        <Link to={elem.link}>
                            <div key={elem.id} className="banquet__container_item">
                                <p className="banquet__container_item_desc">{elem.desc}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
};

export default Banquet;
