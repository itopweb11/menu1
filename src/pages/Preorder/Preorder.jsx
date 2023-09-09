import React, {useState} from 'react';
import './Preorder.scss'
import LoginActive from "../../components/LoginActive/LoginActive";

const Preorder = () => {
    const [preorder, setPreorder] = useState(false)
    return (
        <div className="preorder">
            {
                preorder
                ? <LoginActive desc="Заказ оформлен"/>
                    :  <div className="preorder__container">
                        <p>Предзаказ банкета</p>
                        <input type="text" placeholder="Имя*"/>
                        <input type="text" placeholder="Телефон*"/>
                        <input type="text" placeholder="Почта*"/>
                        <input type="text" placeholder="Событие"/>
                        <input type="text" placeholder="Зал*"/>
                        <input type="text" placeholder="Дата*"/>
                        <input type="text" placeholder="Количество гостей*"/>
                        <input type="text" placeholder="Доп-услуги"/>
                        <button onClick={() => setPreorder(true)}>Оформить заказ</button>
                    </div>
            }

        </div>
    );
};

export default Preorder;
