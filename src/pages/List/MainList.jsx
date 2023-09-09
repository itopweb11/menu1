import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {mainData} from "../Main/data";
import history from "../../helpers/history";
import {api} from "../../api";
import Card from "../../components/Card/Card";
import gifSalads from "../../assets/gif/main/салаты.gif"
import "./MainList.scss"
const MainList = ({basket, setBasket}) => {
    let {name} = useParams();
    const [data, setData] = useState({
        img: '',
        desc: '',
        link: ''
    })
    const [goods, setGoods] = useState([])


    useEffect(() => {
        const d = mainData.find(d => d.link === name)
        if (d !== undefined) {
            setData(d)
        } else {
            history.go(-1)
        }
    }, [name])

    useEffect(() => {
        if (data.link){
            api.goodsApi.getList({type: data.link}).then(res => {
                console.log(res)
                setGoods(res.data.results)
            })
        }
    }, [data])

    return (
        <div className="mainList">
            <div className="mainList__title">
                <p>{data.desc}</p>
            </div>
            <div className="mainList__animation">
                <img src={gifSalads} alt="gif"/>
            </div>
            <div className="mainList__cards">
                {goods.map(good =>
                    <Card
                        basket={basket}
                        setBasket={setBasket}
                        title={good.title}
                        price={good.price}
                        weight={good.weight}
                        image={good.images.length > 0 ? good.images[0].images : ""}
                    />
                )}
            </div>
        </div>
    );
};

export default MainList;
