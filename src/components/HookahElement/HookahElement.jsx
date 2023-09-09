import React, {useState} from 'react';
import './HookahElement.scss'
import {HookahElementData} from "./data";
import HookahBasket from '../../assets/images/hookah/HookahBasket.png'
import HookahModal from "../HookahModal/HookahModal";

const HookahElement = ({setHookah, hookah}) => {
    console.log(hookah, 'hookah')
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
                                    <img src={elem.img} alt=""/>
                                    <p>{elem.tobacco1}</p>
                                </div>
                                <div className="hookahElement__block_desc_item">
                                    <img src={elem.img} alt=""/>
                                    <p>{elem.tobacco2}</p>
                                </div>
                                <div className="hookahElement__block_desc_item">
                                    <img src={elem.img} alt=""/>
                                    <p>{elem.tobacco3}</p>
                                </div>
                                <p onClick={() => setHookah(true)} className="hookahElement__block_desc_linck">{elem.additives}</p>
                            </div>
                            {hookah ? <HookahModal setHookah={setHookah}/> : ""}
                            <div className="hookahElement__block_price">
                                <p>{elem.price}</p>
                                <button>
                                    <img src={HookahBasket} alt="icon"/>
                                </button>
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
