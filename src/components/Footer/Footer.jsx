import { NavLink } from "react-router-dom";
import "../../styles/style.css";
import "./footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <NavLink to="/">
                <div className="nav_logo"></div>
            </NavLink>
            <div>
                © 2022 <span>Digital.</span> Все права защищены
            </div>
            <div className="social">
                <div className="social_yt"></div>
                <div className="social_fb"></div>
                <div className="social_tw"></div>
            </div>
        </div>
    );
}
