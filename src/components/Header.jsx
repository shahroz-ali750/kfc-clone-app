import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div>
        <button>
          <i class="bi bi-list"></i>
        </button>
        <Link>
          <img
            className="ms-2"
            src={process.env.PUBLIC_URL + "/assets/images/logo192.png "}
            alt=""
          />
        </Link>
        <button class="delivery-btn ms-3 ps-3 pe-3">
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + "/assets/images/Delivery-icon.png"}
            alt=""
          />
          <span className="text-uppercase">Delivery</span>
        </button>
        <button className="pickup-btn border border-1 ps-3 pe-4 ms-3">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/pickup.png"}
            alt=""
          />
          <span className="text-uppercase img-fluid">PickUp</span>
        </button>
      </div>
      <div>
        <div class="cart">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/bucket-filled.svg"}
            alt=""
          />
          <Link>login</Link>
        </div>
      </div>
    </div>
  );
}
