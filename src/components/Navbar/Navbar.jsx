import React from "react";
import { NavLink } from "react-router-dom";
import "react-hamburger-menus/dist/style.css";
/* import "../../styles/style.css"; */
import { ResponsiveNavbar } from "react-hamburger-menus";
import './navbar.css';
/* import logo from '../../img/logo.png'; */

export default function Navbar() {
    return (
        <ResponsiveNavbar
            className="nav"
            logo={
                <NavLink to="/">
                    <div className="nav_logo"></div>
                </NavLink>
            }
        >
            <ul>
                <li>
                    <NavLink className="nav_item" to="/market">
                        Торговая площадка
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav_item" to="/auth">
                        Войти
                    </NavLink>
                </li>

                <li>
                    <NavLink className="nav_item reg" to="/reg">
                        Зарегистрироваться
                    </NavLink>
                </li>
            </ul>
        </ResponsiveNavbar>
    );
}
