import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./artsinfo.css";

export default function ArtsInfo(props) {

    const location = useLocation();
    const [item] = useState(props.item || location.state.item);

    return (
        <div className="arts_info">
            <div
                className="arts_info_img"
                style={{ backgroundImage: `url(${item.imgUrl})`, backgroundSize: 'cover' }}
            ></div>

            <div className="arts_info_container">
                <p className="name">{item.name}</p>

                <div className="some_container">
                    <p className="category">{item.category}</p>
                    <div className="llikes">
                        <div className="like"></div>
                        <p className="likes">{item.likes}</p>
                    </div>
                </div>

                <p className="about">{item.about}</p>

                <div className="some_container">
                    <div className="cont">
                        <p className="bold">$ {item.price}</p>
                        <p className="normal">Аукцион</p>
                    </div>
                    <NavLink className="btn" to='/error'>Предложить</NavLink>
                </div>

                <br></br>
                <br></br>

                <div className="cont">
                    <p className="bold">{item.author}</p>
                    <p className="normal">Художник</p>
                </div>
            </div>
        </div>
    );
}
