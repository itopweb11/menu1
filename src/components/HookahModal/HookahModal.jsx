import React from 'react';
import './HookahModal.scss'
import Line from '../../assets/images/hookah/Line42.png'

const HookahModal = ({setHookah}) => {
    return (
        <div className="hookahModal">
            <p className="hookahModal__title">Добавки в колбу</p>
            <div className="hookahModal__item">
                <img src={Line} alt="icon"/>
                <p><span>МОЛОКО</span> 200руб</p>
            </div>
            <div className="hookahModal__item">
                <img src={Line} alt="icon"/>
                <p><span>СОК</span> 200руб</p>
            </div>
            <div className="hookahModal__item">
                <img src={Line} alt="icon"/>
                <p><span>ВИНО</span> 300руб</p>
            </div>
            <button onClick={() => setHookah(false)} className="hookahModal__button">добавить</button>
        </div>
    );
};

export default HookahModal;
