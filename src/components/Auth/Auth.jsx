import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { emailRgx, passwordRgx } from "./RegexHelper";
import Swal from "sweetalert2";
import "./auth.css";

export default function Auth() {

    const history = useNavigate();

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);


    const onFieldChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }

        validateField(name);
    };

    const resetErrByFieldName = (name) => {
        switch (name) {
            case "email":
                setEmailError(null);
                break;
            case "password":
                setPasswordError(null);
                break;
            default:
                break;
        }
    };

    const resetFields = () => {
        setEmail("");
        setPassword("");
    };

    const setErrorByFieldName = (name, error) => {
        switch (name) {
            case "email":
                setEmailError(error);
                break;
            case "password":
                setPasswordError(error);
                break;
            default:
                break;
        }
    };

    const validateField = (e) => {
        if (!e.target || !e.target.name) {
            return;
        }

        const { name, value } = e.target;
        resetErrByFieldName(name);

        if (!value) {
            setErrorByFieldName(name, "Поле не заполнено");
            return;
        }

        let error = null;
        switch (name) {
            case "email": {
                if (!emailRgx.test(String(value).toLowerCase())) {
                    error = "Такого email не существует";
                }
                break;
            }
            case "password":
                if (!passwordRgx.test(String(value).toLowerCase())) {
                    error = "Неверный email или пароль";
                }
                break;
            default:
                break;
        }

        if (error) {
            setErrorByFieldName(name, error);
        }

        return error == null;
    };

    const validateAllFields = () => {
        const items = [
            { name: "email", value: email },
            { name: "password", value: password },
        ];

        return items.every((item) => validateField({ target: item }));
    };

    const onSubmit = () => {
        const isValid = validateAllFields();

        if (isValid) {
            resetFields();
            Swal.fire({
                title: "Здравствуйте",
                text: "Вы удачно вошли в свой аккаунт!",
                icon: "success",
                confirmButtonText: "Продолжить",
            });
            history("/");
            return;
        }

        Swal.fire({
            title: "Ошибка",
            text: "Произошла ошибка при авторизации!",
            icon: "error",
            confirmButtonText: "Продолжить",
        });

    };

    return (
        <div className="auth">
            <p className="auth_header">Войти</p>
            <div className="auth_red">
                <p>У вас еще нет аккаунта?</p>
                <NavLink className="auth_link" to="/reg">
                    Зарегистрироваться
                </NavLink>
            </div>

            <form className="form">
                <p className="label">Эл. адрес</p>
                {emailError && <div className="errors">{emailError}</div>}
                <input
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={email}
                    name="email"
                    className="form_input"
                    type="email"
                    placeholder="Эл. адрес"
                ></input>

                <p className="label">Пароль</p>
                {passwordError && <div className="errors">{passwordError}</div>}
                <input
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={password}
                    name="password"
                    className="form_input"
                    type="password"
                    placeholder="Пароль"
                ></input>

                <br></br>
                <br></br>

                <input
                    className="form_btn"
                    type="button"
                    value="Войти"
                    onClick={onSubmit}
                />
            </form>
        </div>
    );
}
