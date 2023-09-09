import React from 'react';
import "./Home.scss"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <Link to="/main">
                    <div className="home__container_item">
                        <p>Основное меню</p>
                    </div>
                </Link>
                <Link to="/season">
                    <div className="home__container_item">
                        <p>Сезонные блюда</p>
                    </div>
                </Link>
                <Link to="/bar">
                    <div className="home__container_item">
                        <p>Барная карта</p>
                    </div>
                </Link>
                <Link to="/hookah">
                    <div className="home__container_item">
                        <p>Кальянная карта</p>
                    </div>
                </Link>
                <Link to="/banquet">
                    <div className="home__container_item">
                        <p>Банкетное меню</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
