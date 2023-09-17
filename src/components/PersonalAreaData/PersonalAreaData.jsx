import React from 'react';
import './PersonalAreaData.scss'
import {Link} from "react-router-dom";

const PersonalAreaData = ({setModal}) => {
    return (
        <div className="personalAreaData">
            <p onClick={()=>setModal("HistoryOfOrders")}>История заказов</p>
            <p onClick={()=>setModal("PersonalArea")}>Личные данные</p>
            <p>Выход</p>
        </div>
    );
};

export default PersonalAreaData;
