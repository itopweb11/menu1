import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {barData} from "../Bar/data";
import history from "../../helpers/history";
import {api} from "../../api";
import Card from "../../components/Card/Card";
import "./BarList.scss"
import BarListData from "./BarListData";

const BarList = ({basket, setBasket}) => {
    let {name} = useParams();
    const [data, setData] = useState({
        img: '',
        desc: '',
        link: ''
    })
    const [goods, setGoods] = useState([])
    const [showId, setShowId] = useState(-1)


    useEffect(() => {
        const d = barData.find(d => d.link === name)
        if (d !== undefined) {
            setData(d)
        } else {
            history.go(-1)
        }
    }, [name])

    useEffect(() => {
        if (data.link) {
            api.goodsApi.getList({type: "Барная карта", subtype: data.desc}).then(res => {
                setGoods(res.data.results)
            })
        }
    }, [data])

    const handleClick = (id) => {
        setShowId(id)
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

    return (
        <div className="barList">
            <div className="barList__title">
                {goods.map((good, idx) =>
                    <p key={idx}>{good.subtype}</p>
                )}
            </div>
            <div className="barList__animation">
                {goods.map((good, idx) =>
                    <BarListData subtype={good.subtype} idx={idx}/>
                )}
            </div>
            <div className="barList__cards">
                {goods.map((good, idx) =>
                    <Card
                        style={{order: orderStyle(idx)}}
                        key={good.id}
                        isShow={showId === idx}
                        onClick={() => handleClick(idx)}
                        basket={basket}
                        setBasket={setBasket}
                        title={good.title}
                        price={good.price}
                        weight={good.weight}
                        compound={good.compound}
                        image={good.images.length > 0 ? good.images[0].images : ""}
                    />
                )}
            </div>
        </div>
    );
};

export default BarList;
