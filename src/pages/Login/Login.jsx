import React, {useReducer, useState} from 'react';
import "./Login.scss"
import RegisterActive from "../../components/RegisterActive/RegisterActive";
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux'
import {authLogin} from "../../redux/auth/thunk";
import {initialState, reducer} from "./reducers";


const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchStore = useDispatch()

    const loginAction = () => {
        const login = state.login
        if (String(login).match(/^.*@.*$/)) {
            dispatchStore(authLogin("email", {email: state.login, password: state.password})).then(() => {
                setIsLogin(true)
            })
        } else {
            dispatchStore(authLogin("phone", {phone: state.login, password: state.password})).then(() => {
                setIsLogin(true)
            })
        }
    }

    const setData = (key, e) => {
        dispatch({type: 'set_data', key: key, value: e.target.value})
    }

    return (
        <div className="registration">
            {
                isLogin
                    ? <RegisterActive desc="Вы успешно зарегистрировались"/>
                    : <div className={"registration__container registration__container_login"}>
                        <h3 className={"registration__container_title registration__container_title_login"}>
                            Вход в личный кабинет
                        </h3>
                        <div className={"registration__container_inputs registration__container_inputs_login"}>
                            <input
                                value={state.login}
                                onChange={e => setData("login", e)}
                                type="text"
                                placeholder="Почта или телефон"
                            />
                            <input
                                value={state.password}
                                onChange={e => setData("password", e)}
                                type="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <div className={"registration__container_signIn registration__container_signIn_login"}>
                            <p>Еще нет аккаунта?</p>
                            <Link to={"/register"}>Зарегистрируйтесь!</Link>
                        </div>
                        <button onClick={loginAction}
                                className={"registration__container_button registration__container_button_login"}
                        >
                            Войти
                        </button>
                    </div>
            }
        </div>
    );
};

export default Login;
