import React from 'react';
import Bask from "../../assets/images/card/basket.png";
import "./BasketBtn.scss"

const BasketBtn = ({card, setNum, setBasket, basket, num, setHookahBask}) => {
    return (
        <div className={card ? "basketBtnActive" : "basketBtn"}>
            <button onClick={() => {
                setNum(num + 1)
                setBasket(basket + 1)
            }}
            >
                {
                    card ? <p>Добавить в корзину </p> : <img src={Bask} alt=""/>
                }
            </button>
        </div>
    );
};

export default BasketBtn;
