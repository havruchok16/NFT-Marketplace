import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import lottie from "lottie-web";
import error from "../../img/6719-404-error-glitch.json";
import "../../styles/style.css";
import "./error.css";

export default function Error() {

    useEffect(() => {
    lottie.loadAnimation({
        container: document.querySelector("#anim"),
        animationData: error,
    });
    }, []);

    return (
        <div className="errors">
            <div className="error">
                <div id="anim" className="error_anim" />
                <p className="error_text">
                    Произошла ошибка... <br></br>
                    Вернитесь на главную страницу
                </p>
                <NavLink className="btn btn_error" to="/">
                    Главная
                </NavLink>
            </div>
        </div>
    );
}
