import { NavLink } from "react-router-dom";
import Email from "../Email/Email";
import "../../styles/style.css";
import "./market.css";
import ArtsList from "../Arts/Arts";
import { ArtsListData } from "../../data/ArtsData";
import { sortArr } from "./SortHelper";
import { useState } from "react";

export default function Market() {

    const [items, setItems] = useState(ArtsListData);

    const changeSortValue = (v) => {
        const sortValue = v.target.value;
        setItems(sortArr(sortValue, items));
    }

    return (
        <div>
            <div className="market">
                <p className="market_info">Торговая площадка</p>
                <div className="arrow_container">
                    <div className="arrow"></div>
                </div>
            </div>

            <div className="filter">
                <input type="button" className="btn_filter" value="Все" />
                <input type="button" className="btn_filter" value="Искусство" />
                <input type="button" className="btn_filter" value="Игры" />
                <input type="button" className="btn_filter" value="Спорт" />
                <input type="button" className="btn_filter" value="Музыка" />
                <select name="sortSelect" className="btn_filter" onChange={changeSortValue}>
                    <option className="btn_filter" value="0">
                        Популярные
                    </option>
                    <option className="btn_filter" value="1">
                        По цене вниз
                    </option>
                    <option className="btn_filter" value="2">
                        По цене вверх
                    </option>
                    <option className="btn_filter" value="3">
                        Алфавит А-Я
                    </option>
                    <option className="btn_filter" value="4">
                        Алфавит Я-А
                    </option>
                </select>
            </div>

            <ArtsList items={items} />

            <div className="container_btn">
                <NavLink className="btn" to="/market">
                    Показать ещё
                </NavLink>
            </div>

            <Email />
        </div>
    );
}
