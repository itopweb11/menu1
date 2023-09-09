import React from 'react';
import Bask from "../../assets/images/card/basket.png";
import "./BasketBtn.scss"

const BasketBtn = ({setNum, setBasket, basket, num}) => {
    return (
        <div className="basketBtn">
            <button onClick={() => {
                setNum(num + 1)
                setBasket(basket + 1)
            }}
            >
                <img src={Bask} alt=""/>
            </button>
        </div>
    );
};

export default BasketBtn;
