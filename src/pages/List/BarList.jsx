import React from 'react';
import {useParams} from "react-router-dom";
import Card from "../../components/Card/Card";
import "./BarList.scss"
import BarListData from "./BarListData";

const BarList = () => {
    let {name} = useParams();

    return (
        <div className="barList">
            <div className="barList__title">
                <p>{name}</p>
            </div>
            <div className="barList__animation">
                <BarListData subtype={name}/>
            </div>
            <Card data={{type: "Банкетное меню", subtype: name}}/>
        </div>
    );
};

export default BarList;
