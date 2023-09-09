import React from 'react';
import {seasonData} from "./data";
import "./Season.scss"
const Season = () => {
    return (
        <div className="season">
            <div className="season__container">
                <h3 className="season__container_title">Сезонные блюда</h3>
                <div  className="season__container_items">
                    {seasonData.map(elem => {
                        return (
                            <div  className="season__container_items_item">
                                <img className="season__container_items_item_img" src={elem.img} alt="icon"/>
                                <div className="season__container_items_item_desc">
                                    <p>{elem.desc}</p>
                                    <p>{elem.weight}</p>
                                </div>
                                <p className="season__container_items_item_price">{elem.price}</p>
                                <div className="season__container_items_item_basket">
                                    <button>
                                        <img src={elem.iconBasket} alt="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Season;
