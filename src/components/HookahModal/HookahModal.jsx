import React from 'react';
import './HookahModal.scss'
import Line from '../../assets/images/hookah/Line42.png'

const HookahModal = ({setHookah}) => {
    const closeModal = (e) =>{
        setHookah(false)
    }
    return (
        <div className="hookahModal" onClick={e => closeModal(e)}>
            <div className="hookahModal__desc" onClick={e => e.stopPropagation()}>
                <p className="hookahModal__desc__title">Добавки в колбу</p>
                <div className="hookahModal__desc__item">
                    <img src={Line} alt="icon"/>
                    <p><span>МОЛОКО</span> 200руб</p>
                </div>
                <div className="hookahModal__desc__item">
                    <img src={Line} alt="icon"/>
                    <p><span>СОК</span> 200руб</p>
                </div>
                <div className="hookahModal__desc__item">
                    <img src={Line} alt="icon"/>
                    <p><span>ВИНО</span> 300руб</p>
                </div>
                <button onClick={() => setHookah(false)} className="hookahModal__desc__button">добавить</button>
            </div>
        </div>
    );
};

export default HookahModal;
