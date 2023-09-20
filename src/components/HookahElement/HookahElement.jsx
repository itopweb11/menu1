import React, {useState} from 'react';
import './HookahElement.scss'
import HookahBasket from '../../assets/images/hookah/HookahBasket.png'
import Counter from "../Counter/Counter";
import Line from '../../assets/images/hookah/Line42.png'

const HookahElement = ({setHookah, setBasket, basket, title, price, tobacco_type, idx}) => {

    const [hookahBask, setHookahBask] = useState(false)
    const [hookahNum, setHookahNum] = useState(0)

    const handleClick = () => {
        setBasket(basket + 1)
        setHookahBask(true)
    }

    return (
        <div className="hookahElement">
            <div className="hookahElement__subtitle">
                <p>{title}</p>
            </div>
            <div className="classic hookahElement__block">
                <div className="hookahElement__block_desc">
                    <p className="hookahElement__block_desc_subtitle">Выбрать табак</p>
                    <div className="hookahElement__block_desc_item">
                        <img src={Line} alt="icon"/>
                        <p>{tobacco_type[0]}</p>
                    </div>
                    <div className="hookahElement__block_desc_item">
                        <img src={Line} alt="icon"/>
                        <p>{tobacco_type[1]}</p>
                    </div>
                    <div className="hookahElement__block_desc_item">
                        <img src={Line} alt="icon"/>
                        <p>{tobacco_type[2]}</p>
                    </div>
                    <p onClick={() => setHookah(true)} className="hookahElement__block_desc_linck">Выбрать добавки</p>
                </div>
                <div className="hookahElement__block_price">
                    <p>{price} руб.</p>
                    {
                        hookahBask ? <Counter basket={basket} setBasket={setBasket}/> :
                            <button onClick={handleClick}>
                                <img src={HookahBasket} alt="icon"/>
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default HookahElement;
