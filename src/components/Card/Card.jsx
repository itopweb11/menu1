import React, {useState} from 'react';
import "./Card.scss"
import BasketBtn from "../BasketBtn/BasketBtn";
import Counter from "../Counter/Counter";
const Card = ({image, title, price, weight, setBasket, basket}) => {
    const [num , setNum] = useState(0)

    return (
        <div  className="card">
            <div className="card__img">
                <img src={image} alt="icon"/>
            </div>
            <p className="card__name">{title}</p>
            <div className="card__price">
                <p>{price} руб</p>
                <p>{weight} г.</p>
            </div>
            {
                num > 0 ? <Counter basket={basket} setBasket={setBasket} num={num} setNum={setNum}/> : <BasketBtn basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
            }
        </div>
    );
};

export default Card;
