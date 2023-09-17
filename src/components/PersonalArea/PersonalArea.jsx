import React from 'react';
import './PersonalArea.scss'
import Vector1 from '../../assets/images/PersonalArea/Vector1.png'
import {Link} from "react-router-dom";

const PersonalArea = () => {
    return (
        <div className="personalArea">
            <div className="personalArea__edit">
                <p className="personalArea__edit_name">Имя: Иван</p>
                <Link to="/personalArea/edit">
                    <img src={Vector1} alt="Vector1"/>
                </Link>
            </div>
            <p  className="personalArea__lastname">Фамилия: Иванов</p>
            <p  className="personalArea__phone">Телефон: +7(999)555-55-55</p>
            <p  className="personalArea__gmail">Почта: ivanovivan@mail.ru</p>
        </div>
    );
};

export default PersonalArea;
