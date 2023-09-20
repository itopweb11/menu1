import React, {useEffect, useState} from 'react';
import "./Card.scss"
import BasketBtn from "../BasketBtn/BasketBtn";
import Counter from "../Counter/Counter";
import {getImage} from "../../helpers/image";
import {api} from "../../api";
const Card = ({data}) => {
    const [goods, setGoods] = useState([])

    const [num , setNum] = useState(0)
    const [showId, setShowId] = useState(-1)
    const [basket , setBasket] = useState(0)

    useEffect(() => {
        api.goodsApi.getList(data).then(res => {
            setGoods(res.data.results)
        })
    }, [])

    const handleClick = (id) => {
        if (showId === id){
            setShowId(-1)
        }else{
            setShowId(id)
        }
    }
    const orderStyle = (id) => {
        if (window.innerWidth > 400){
            if (showId >= 0 && showId % 2 === 1) {
                if (id - 1 === showId) {
                    return id - 1
                } else if (id === showId) {
                    return id + 1
                }
            }
        }

        return id
    }

    const isShow = (idx) => showId === idx

    return (
        <div className="card__container_items">
            {goods.map((good, idx) => <div key={idx}  className={isShow(idx) ? "card  card__active" : "card"} style={{order: orderStyle(idx)}}>
                    <div onClick={()=>handleClick(idx)} className={isShow(idx) ? "card__img  card__img_active" : "card__img"}>
                        <img src={getImage(good.images)} alt="icon"/>
                    </div>
                    {
                        isShow(idx) ?
                            <div className="card__desc_active">
                                <div className="card__desc_active_title">
                                    <p>{good.title}</p>
                                    <p>{good.weight} г.</p>
                                </div>
                                <p className="card__desc_active_compound">Состав {good.compound}</p>
                                <div  className="card__desc_active_price">
                                    <p>{good.price} руб</p>
                                    {
                                        num > 0 ? <Counter basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                                            : <BasketBtn isShow={isShow(idx)} basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                                    }
                                </div>
                            </div>
                            : <div className="card__desc">
                                <p className="card__desc_name">{good.title}</p>
                                <div className="card__desc_price">
                                    <p>{good.price} руб</p>
                                    <p>{good.weight} г.</p>
                                </div>
                                {
                                    num > 0 ? <Counter basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                                        : <BasketBtn basket={basket} setBasket={setBasket} num={num} setNum={setNum}/>
                                }
                            </div>
                    }
                </div>
            )}
        </div>

    );
};

export default Card;
