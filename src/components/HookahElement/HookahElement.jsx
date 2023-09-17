import React, {useState} from 'react';
import './HookahElement.scss'
import {HookahElementData} from "./data";
import HookahBasket from '../../assets/images/hookah/HookahBasket.png'
import Counter from "../Counter/Counter";

const HookahElement = ({setHookah, setBasket, basket}) => {

    const [hookahBask, setHookahBask] = useState(false)
    const [hookahNum, setHookahNum] = useState(0)

    const handleClick = () => {
        setBasket(basket + 1)
        setHookahBask(true)
    }

    return (
        <div className="hookah__container">
            <p className="hookah__container_title">Кальянная карта</p>
            {HookahElementData.map(elem  => {
                return (
                    <div key={elem.id} className="hookahElement">
                        <div className="hookahElement__subtitle">
                            <p>{elem.title}</p>
                        </div>
                        <div className={elem.className}>
                            <div className="hookahElement__block_desc">
                                <p className="hookahElement__block_desc_subtitle">{elem.subtitle}</p>
                                <div className="hookahElement__block_desc_item">
                                    <img src={elem.img} alt="icon"/>
                                    <p>{elem.tobacco1}</p>
                                </div>
                                <div className="hookahElement__block_desc_item">
                                    <img src={elem.img} alt="icon"/>
                                    <p>{elem.tobacco2}</p>
                                </div>
                                <div className="hookahElement__block_desc_item">
                                    <img src={elem.img} alt="icon"/>
                                    <p>{elem.tobacco3}</p>
                                </div>
                                <p onClick={() => setHookah(true)} className="hookahElement__block_desc_linck">{elem.additives}</p>
                            </div>
                            <div className="hookahElement__block_price">
                                <p>{elem.price}</p>
                                {
                                    hookahBask ? <Counter basket={basket} setBasket={setBasket}/> :
                                    <button onClick={handleClick}>
                                        <img src={HookahBasket} alt="icon"/>
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default HookahElement;
