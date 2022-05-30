import React from "react";
import "./arts.css";
import ArtsItem from "./ArtsItem";

export default function ArtsList(props) {
    return (
        <div className="arts">
            <div className="arts_list">
                {props.items.map((el) => (
                    <ArtsItem key={el.name} item={el} />
                ))}
            </div>
        </div>
    );
}
