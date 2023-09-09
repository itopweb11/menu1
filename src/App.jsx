import React, {useState} from 'react';
import Router from "./router/router";
import Header from "./components/Layout/Header/Header";
import "./App.scss"

const App = () => {
    const [menu, setMenu] = useState(false)
    const [basket , setBasket] = useState(0)

    const handleClick = () => {
        if (menu) {
            setMenu(false)
        }
    }
    return (
        <div onClick={handleClick} className="app">
            <Header basket={basket} menu={menu} setMenu={setMenu}/>
            <Router setBasket={setBasket} basket={basket}/>
        </div>
    );
};

export default App;
