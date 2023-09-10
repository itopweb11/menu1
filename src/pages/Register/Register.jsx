import React, {useState} from 'react';
import "./Register.scss"
import RegisterActive from "../../components/RegisterActive/RegisterActive";
import {Link} from "react-router-dom";


const Register = () => {
    const [loginActive, setRegisterActive] = useState(false)
    const [register, setRegister] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: "",
        password: "",
        re_password: "",
    })

    const registerAction = () => {

    }

    return (
        <div className="registration">
            {
                loginActive
                    ? <RegisterActive desc="Вы успешно зарегистрировались"/>
                    : <div className={"registration__container registration__container_login"}>
                        <h3 className={"registration__container_title registration__container_title_login"}>Вход в личный
                            кабинет</h3>
                        <div className={"registration__container_inputs registration__container_inputs_login"}>
                            <div className={"registration__container_inputs"}>
                                <input value={register.email} type="email" placeholder="Почта"/>
                                <input value={register.first_name} type="text" placeholder="Имя"/>
                                <input value={register.password} type="password" placeholder="Пароль"/>
                                <input value={register.last_name} type="text" placeholder="Фамилия"/>
                                <input value={register.re_password} type="password" placeholder="Повторить пароль"/>
                                <input value={register.phone} type="text" placeholder="Телефон"/>
                            </div>
                        </div>
                        <div className={"registration__container_signIn registration__container_signIn_login"}>
                            <p>Есть аккаунт?</p>
                            <Link to={"/login"}>Войдите!</Link>
                        </div>
                        <button onClick={registerAction}
                                className={"registration__container_button registration__container_button_login"}>Войти
                        </button>
                    </div>
            }
        </div>
    );
};

export default Register;
