import React, {useState} from 'react';
import './Basket.scss'
import RegisterActive from "../../components/RegisterActive/RegisterActive";

const Basket = () => {
    const [persons, setPersons] = useState(0)
    const [order, setOrder] = useState(false)

    return (
        <div className="basket">
            {
                order
                    ?  <RegisterActive desc="Заказ создан"/>
                    : <div>
                        <h1 className="basket__title">Корзина</h1>
                        <div className="basket__desc">
                            <p className="basket__desc_order">Заказ № 635</p>
                            <div className="basket__desc_list">
                                <p>Шот Б-52 (60МЛ) - 400 РУБ</p>
                                <p>Шот Б-52 (60МЛ) - 400 РУБ</p>
                            </div>
                            <p className="basket__desc_price">Сумма: 800руб</p>
                            <div className="basket__desc_table">
                                <p>Номер стола:</p>
                                <input type="text"/>
                            </div>
                            <div className="basket__desc_persons">
                                <p>Кол-Во персон:</p>
                                <div className="basket__desc_persons_count">
                                    <div className="basket__desc_persons_count_button" onClick={() => setPersons(persons ? persons - 1 : 0)}>-</div>
                                    <p>{persons}</p>
                                    <div className="basket__desc_persons_count_button"onClick={() => setPersons( persons + 1 )}>+</div>
                                </div>
                            </div>
                            <textarea className="basket__desc_coment" placeholder="Коментарий к заказу" name="comment"></textarea>
                            <button onClick={() => setOrder(true)} className="basket__desc_button">Заказать</button>
                        </div>
                    </div>

            }
        </div>
    );
};

export default Basket;
