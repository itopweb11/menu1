import React, {useState} from 'react';
import "./Login.scss"
import LoginActive from "../../components/LoginActive/LoginActive";

const Login = () => {
    const [login, setLogin] = useState(true)
    const [loginActive, setLoginActive] = useState(false)

    return (
        <div className="registration">
            {
                loginActive
                    ? <LoginActive desc="Вы успешно зарегистрировались"/>
                    :  <div className={login ? "registration__container" : "registration__container registration__container_login"}>
                        <h3 className={login ? "registration__container_title" : "regNone"}>Регистрация</h3>
                        <h3 className={!login ? "registration__container_title registration__container_title_login" : "regNone"}>Вход в личный кабинет</h3>
                        <div className={login ? "registration__container_inputs" : "regNone"}>
                            <input type="text" placeholder="Почта"/>
                            <input type="text" placeholder="Имя"/>
                            <input type="text" placeholder="Пароль"/>
                            <input type="text" placeholder="Фамилия"/>
                            <input type="text" placeholder="Повторить пароль"/>
                            <input type="text" placeholder="Телефон"/>
                        </div>
                        <div className={!login ? "registration__container_inputs registration__container_inputs_login" : "regNone"}>
                            <input type="text" placeholder="Почта или телефон"/>
                            <input type="text" placeholder="Пароль"/>
                        </div>
                        <div className={login ? "registration__container_signIn" : "regNone"}>
                            <p>Есть аккаунт?</p>
                            <a onClick={() => setLogin(false)} href="#">Войдите!</a>
                        </div>
                        <div className={!login ? "registration__container_signIn registration__container_signIn_login" : "regNone"}>
                            <p>Еще нет аккаунта?</p>
                            <a onClick={() => setLogin(true)} href="#">Зарегистрируйтесь!</a>
                        </div>
                        <button onClick={() => setLoginActive(true)} className={login ? "registration__container_button" : "regNone"}>Зарегистрироваться</button>
                        <button onClick={() => setLoginActive(true)} className={!login ? "registration__container_button registration__container_button_login" : "regNone"}>Войти</button>
                    </div>
            }
        </div>
    );
};

export default Login;
