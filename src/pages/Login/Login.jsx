import React, {useReducer, useRef} from 'react';
import "./Login.scss"
import RegisterActive from "../../components/RegisterActive/RegisterActive";
import {Link, useNavigate} from "react-router-dom";
import {api} from "../../api";

function reducer(state, action) {
    switch (action.type) {
        case 'set_login':
            return {
                ...state,
                login: action.login,
            };
        case 'set_password':
            return {
                ...state,
                password: action.password,
            };
        default:
            return state;
    }
}

const initialState = {login: "", password: ""};

const Login = () => {
    const loginActiveRef = useRef(false)
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    const setToken = (token) => {
        localStorage.setItem("token", token)
        navigate("/")
    }
    const loginAction = () => {
        const login = state.login
        if (String(login).match(/^.*@.*$/)) {
            api.authApi.tokenEmail({
                email: state.login,
                password: state.password
            }).then(res => setToken(res.data.auth_token)).catch(e => console.log(e))
        } else {
            api.authApi.tokenPhone({
                phone: state.login,
                password: state.password
            }).then(res => setToken(res.data.auth_token)).catch(e => console.log(e))
        }
    }
    return (
        <div className="registration">
            {
                !loginActiveRef
                    ? <RegisterActive desc="Вы успешно зарегистрировались"/>
                    : <div className={"registration__container registration__container_login"}>
                        <h3 className={"registration__container_title registration__container_title_login"}>Вход в
                            личный
                            кабинет</h3>
                        <div className={"registration__container_inputs registration__container_inputs_login"}>
                            <input
                                value={state.login}
                                onChange={e => dispatch({type: 'set_login', login: e.target.value})}
                                type="text"
                                placeholder="Почта или телефон"
                            />
                            <input
                                value={state.password}
                                onChange={e => dispatch({type: 'set_password', password: e.target.value})}
                                type="password"
                                placeholder="Пароль"
                            />
                        </div>
                        <div className={"registration__container_signIn registration__container_signIn_login"}>
                            <p>Еще нет аккаунта?</p>
                            <Link to={"/register"}>Зарегистрируйтесь!</Link>
                        </div>
                        <button onClick={loginAction}
                                className={"registration__container_button registration__container_button_login"}>Войти
                        </button>
                    </div>
            }
        </div>
    );
};

export default Login;
