import React from "react";
import { Link } from "react-router-dom";

export default function FoodItems(props) {
  return (
    <div className="meal-1">
      <Link>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "/assets/images/" + props.img + ".png"}
          alt=""
        />
      </Link>
      <h6>{props.itemName}</h6>
      <span className="round-design"></span>
      <div
        style={{
          display: "inline-block",
          borderBottom: "2px solid #ea002a",
          width: "50px",
          borderRadius: "5px",
          marginBottom: "10px",
        }}></div>
    </div>
  );
}
