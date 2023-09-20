import React from 'react';
import {useParams} from "react-router-dom";
import Card from "../../components/Card/Card";
import "./MainList.scss"
import MainListData from "./MainListData";

const MainList = () => {
    let {name} = useParams();


    return (
        <div className="mainList">
            <div className="mainList__title">
                <p>{name}</p>
            </div>
            <div className="mainList__animation">
                <MainListData subtype={name}/>
            </div>
            <Card data={{type: "Основное меню", subtype: name}}/>
        </div>
    );
};

export default MainList;
