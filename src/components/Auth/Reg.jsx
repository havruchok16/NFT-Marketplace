import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { emailRgx, passwordRgx } from "./RegexHelper";
import Swal from "sweetalert2";
import "./auth.css";

export default function Reg() {

    const history = useNavigate();

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState(null);

    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState(null);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(null);


    const onFieldChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "username":
                setUsername(value);
                break;
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
            case "name":
                setNameError(null);
                break;
            case "username":
                setUsernameError(null);
                break;
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
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
    };

    const setErrorByFieldName = (name, error) => {
        switch (name) {
            case "name":
                setNameError(error);
                break;
            case "username":
                setUsernameError(error);
                break;
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
            case "name": {
                if (value.length < 2) {
                    error = "Имя должно содержать больше 2 символов";
                }
                break;
            }
            case "username": {
                if (value.length < 5) {
                    error = "Имя пользователя должно содержать больше 5 символов";
                }
                break;
            }
            case "email": {
                if (!emailRgx.test(String(value).toLowerCase())) {
                    error = "Email некорректный";
                }
                break;
            }
            case "password":
                if (!passwordRgx.test(String(value).toLowerCase())) {
                    error = "Пароль должен содержать больше 5 символов";
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
            { name: "name", value: name },
            { name: "username", value: username },
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
                text: "Спасибо за регистрацию на нашем сайте!",
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
            <p className="auth_header">Зарегистрироваться</p>
            <div className="auth_red">
                <p>У вас уже есть аккаунт?</p>
                <NavLink className="auth_link" to="/auth">
                    Войти
                </NavLink>
            </div>

            <form className="form">
                <p className="label">ФИО</p>
                {nameError && <div className="errors">{nameError}</div>}
                <input
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={name}
                    name="name"
                    className="form_input"
                    type="text"
                    placeholder="ФИО"
                ></input>

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

                <p className="label">Имя пользователя</p>
                {usernameError && <div className="errors">{usernameError}</div>}
                <input
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={username}
                    name="username"
                    className="form_input"
                    type="text"
                    placeholder="Имя пользователя"
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
                    value="Зарегистрироваться"
                    onClick={onSubmit}
                />
            </form>
        </div>
    );
}
