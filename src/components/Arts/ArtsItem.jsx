import React from "react";
import { useNavigate } from "react-router-dom";
import "./arts.css";

const ArtsItem = (props) => {

    const history = useNavigate();

    const onClick = () => {
        history("/artsinfo", {
            state: {
                item: props.item
            }
        });
    }

    return (
        <div
            className="arts_item"
            style={{ backgroundImage: `url(${props.item.imgUrl})` }}
        >
            <div className="info">
                <p className="name">{props.item.name}</p>

                <div className="info_container">
                    <p className="price">
                        {props.item.valute || "$"} {props.item.price}
                    </p>
                    <p className="price">
                        {props.item.valute || "$"} {props.item.nowPrice}
                    </p>
                    <div className="like"></div>
                </div>

                <div className="info_container">
                    <p className="buy" onClick={onClick}>
                        Аукцион
                    </p>
                    <p className="buy" onClick={onClick}>
                        Купить сейчас
                    </p>
                    <div className="likes">{props.item.likes}</div>
                </div>
            </div>
        </div>
    );
};

export default ArtsItem;
