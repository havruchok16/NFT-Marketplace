import { emailRgx } from "../Auth/RegexHelper";
import React, { useState } from "react";
import "./email.css";
import Swal from "sweetalert2";

export default function Email() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(null);

    const onFieldChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "email":
                setEmail(value);
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
            default:
                break;
        }
    };

    const resetFields = () => {
        setEmail("");
    };

    const setErrorByFieldName = (name, error) => {
        switch (name) {
            case "email":
                setEmailError(error);
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
                    error = "Email некорректный";
                }
                break;
            }
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
        ];

        return items.every((item) => validateField({ target: item }));
    };

    const onSubmit = () => {
        const isValid = validateAllFields();

        if (isValid) {
            resetFields();
            Swal.fire({
                title: "Спасибо",
                text: "Вы подписались на нашу рассылку!",
                icon: "success",
                confirmButtonText: "Продолжить",
            });
            return;
        }

        Swal.fire({
            title: "Ошибка",
            text: "Введите email, чтобы подписаться на нашу рассылку!",
            icon: "error",
            confirmButtonText: "Продолжить",
        });
    };

    return (
        <div className="email">
            <p className="email_header">Получай последние обновления</p>
            <p className="email_underheader">
                Подпишитесь на последние новости, дропы и предметы
                коллекционирования
            </p>

            {emailError && <div className="errors">{emailError}</div>}

            <div className="email_info">
                <input
                    className="email_input"
                    onBlur={(e) => validateField(e)}
                    onChange={(e) => onFieldChange(e)}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Эл. адрес"
                ></input>

                <input
                    className="btn"
                    type="button"
                    value="Подписаться"
                    onClick={onSubmit}
                />
            </div>
        </div>
    );
}
