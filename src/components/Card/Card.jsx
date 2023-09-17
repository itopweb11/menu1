import React, {useEffect, useState} from 'react';
import "./Card.scss"
import BasketBtn from "../BasketBtn/BasketBtn";
import Counter from "../Counter/Counter";
const Card = ({compound, image, title, price, weight, setBasket, basket, onClick, isShow, style}) => {
    const [num , setNum] = useState(0)

    return (
        <div  className={isShow ? "card  card__active" : "card"} style={style}>
            <div onClick={onClick} className={isShow ? "card__img  card__img_active" : "card__img"}>
                <img src={image} alt="icon"/>
            </div>
            {
                isShow ?
                    <div className="card__desc_active">
                        <div className="card__desc_active_title">
                            <p>{title}</p>
                            <p>{weight} г.</p>
                        </div>
                        <p className="card__desc_active_compound">Состав {compound}</p>
                        <div  className="card__desc_active_price">
                            <p>{price} руб</p>
                            {
                                num > 0 ? <Counter basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                                    : <BasketBtn isShow={isShow} basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                            }
                        </div>
                    </div>
                    : <div className="card__desc">
                        <p className="card__desc_name">{title}</p>
                        <div className="card__desc_price">
                            <p>{price} руб</p>
                            <p>{weight} г.</p>
                        </div>
                        {
                            num > 0 ? <Counter basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                                : <BasketBtn basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                        }
                    </div>
            }
        </div>
    );
};

export default Card;
