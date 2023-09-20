import React, {useEffect, useState} from 'react';
import './Hookah.scss'
import HookahElement from "../../components/HookahElement/HookahElement";
import HookahModal from "../../components/HookahModal/HookahModal";
import {api} from "../../api";
import axios from "axios";

const Hookah = ({setBasket, basket}) => {
    const [hookah, setHookah] = useState(false)
    const [goods, setGoods] = useState([])
    const [a, setA] = useState([])


    useEffect(() => {
        if ("hookah" === "hookah") {
            api.goodsApi.getList({type: "Кальянная карта", hookah_type: "Классика"}).then(res => {
                setGoods(res.data.results)
            })
        }
    }, ["hookah"])

    return (
        <div  className="hookah">
            <div className="hookah__container">
                <p className="hookah__container_title">Кальянная карта</p>
                {goods.map((good, idx) =>
                    <HookahElement
                        key={idx}
                        basket={basket}
                        setBasket={setBasket}
                        setHookah={setHookah}
                        title={good.title}
                        price={good.price}
                        tobacco_type={good.tobacco_type}
                    />
                )}
                {hookah ?
                    goods.map((good, idx) =>
                        <HookahModal
                            key={idx}
                            additive_type={good.additive_type}
                            setHookah={setHookah}
                        />
                    )
                     : ""
                }
            </div>
        </div>
    );
};

export default Hookah;
