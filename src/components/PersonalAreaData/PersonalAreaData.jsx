import React from 'react';
import './PersonalAreaData.scss'
import {Link} from "react-router-dom";

const PersonalAreaData = () => {
    return (
        <div className="personalAreaData">
            <Link to="/historyOfOrders">
                <p>История заказов</p>
            </Link>
            <Link to="/personalArea">
                <p>Личные данные</p>
            </Link>
            <p>Выход</p>
        </div>
    );
};

export default PersonalAreaData;
