import { NavLink } from "react-router-dom";
import Email from "../Email/Email";
import "../../styles/style.css";
import './main.css';
import { ArtsListData } from "../../data/ArtsData";
import ArtsList from "../Arts/Arts";

export default function Main() {
    return (
        <div>
            <div className="main">
                <div className="banner">
                    <p className="banner_info">NFT платформа</p>
                    <p>Покупайте NFT от лучших мировых художников</p>
                    <br></br>
                    <NavLink className="btn" to="/market">
                        Marketplace
                    </NavLink>
                </div>

                <div className="arrow"></div>
            </div>

            <p className="main_catalog">Новые предложения</p>

            <ArtsList items={ArtsListData} />

            <div className="container_btn">
                <NavLink className="btn" to="/market">
                    Marketplace
                </NavLink>
            </div>

            <Email />
        </div>
    );
}
