import React from 'react';
import './PersonalAreaModal.scss'
import {Link, Route, Routes} from "react-router-dom";
import PersonalAreaData from "../PersonalAreaData/PersonalAreaData";
import PersonalArea from "../PersonalArea/PersonalArea";
import HistoryOfOrders from "../HistoryOfOrders/HistoryOfOrders";
import Vector from '../../assets/images/PersonalArea/Vector.png'
import PersonalAreaEdit from "../PersonalAreaEdit/PersonalAreaEdit";
const PersonalAreaModal = ({personal, setPersonal}) => {

    return (
        personal ?
        <div onClick={() => setPersonal(true)} className={personal ? "personalAreaModal" : ""}>
            <div onClick={() => setPersonal(true)} className={personal ? "personalAreaModal__items personalAreaModal__items__active" : "personalAreaModal__items"}>
                <Link className="personalAreaModal__items_name" to="/">
                    <h3>Иван Иванов</h3>
                    <img src={Vector} alt="vector"/>
                </Link>
                <span className="personalAreaModal__items_line"></span>
                <Routes>
                    <Route path="/" element={<PersonalAreaData/>}/>
                    <Route path="/personalArea" element={<PersonalArea/>}/>
                    <Route path="/personalArea/edit" element={<PersonalAreaEdit/>}/>
                    <Route path="/historyOfOrders" element={<HistoryOfOrders/>}/>
                </Routes>
            </div>
        </div>
            : ''
    );
};

export default PersonalAreaModal;
