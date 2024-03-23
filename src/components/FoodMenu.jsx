import React from "react";
import { Link } from "react-router-dom";

export default function FoodMenu() {
  return (
    <div className="bg-black">
      <div className="container">
        <div>
          <h2 className=" text-white items-title ">
            <span>Explore Menu</span>
          </h2>
        </div>
        <div className="meal-1">
          <Link>
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/assets/images/zinger.png"}
              alt=""
            />
          </Link>
          <h6>Everyday Value</h6>
        </div>

        <div className="meal-2 ms-2">
          <Link>
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + "/assets/images/zinger-combo.png"}
              alt=""
            />
          </Link>
          <h6>Ala-Carte-&-Combos</h6>
        </div>
      </div>
    </div>
  );
}
