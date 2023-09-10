import React from 'react';
import Home from "../pages/Home/Home";
import Main from "../pages/Main/Main";
import Banquet from "../pages/Banquet/Banquet";
import Bar from "../pages/Bar/Bar";
import Hookah from "../pages/Hookah/Hookah";
import Season from "../pages/Season/Season";
import {Route, Routes} from "react-router-dom";
import MainList from "../pages/List/MainList";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Preorder from "../pages/Preorder/Preorder";
import Basket from "../pages/Basket/Basket";

const Router = ({basket, setBasket}) => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/main/:name" element={<MainList basket={basket} setBasket={setBasket}/>}/>

            <Route path="/banquet" element={<Banquet/>}/>
            <Route path="/bar" element={<Bar/>}/>
            <Route path="/hookah" element={<Hookah/>}/>
            <Route path="/season" element={<Season/>}/>
            <Route path="/preorder" element={<Preorder/>}/>
            <Route path="/basket" element={<Basket/>}/>

            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="*" element={<Home/>}/>
        </Routes>
    );
};

export default Router;
