import React from 'react';
import './PersonalAreaModal.scss'
import {Link, Route, Routes} from "react-router-dom";
import PersonalAreaData from "../PersonalAreaData/PersonalAreaData";
import PersonalArea from "../PersonalArea/PersonalArea";
import HistoryOfOrders from "../HistoryOfOrders/HistoryOfOrders";
import Vector from '../../assets/images/PersonalArea/Vector.png'
import PersonalAreaEdit from "../PersonalAreaEdit/PersonalAreaEdit";
import {store} from "../../redux";

const PersonalAreaModal = ({isShow, setIsShow}) => {
    const {me} = store.getState().auth

    const closeModal = () => {
        setIsShow(false)
    }

    return (
        isShow ?
            <div onClick={closeModal} className={isShow ? "personalAreaModal" : ""}>
                <div
                    onClick={e => e.stopPropagation()}
                    className={isShow ? "personalAreaModal__items personalAreaModal__items__active" : "personalAreaModal__items"}>
                    <div>
                        <Link className="personalAreaModal__items_name" to="/"><h3>{me.first_name} {me.last_name}</h3>
                        </Link>
                        <img onClick={closeModal} src={Vector} alt="vector"/>
                    </div>

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
