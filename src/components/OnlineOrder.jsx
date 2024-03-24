import React from "react";
import { Link } from "react-router-dom";

export default function OnlineOrder() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <Link>
              <img
                className="img-fluid rounded rounded-4"
                src={
                  process.env.PUBLIC_URL + "/assets/images/pickup-banner.png"
                }
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-4">
            /
            <Link>
              <img
                className="img-fluid rounded rounded-4"
                src={
                  process.env.PUBLIC_URL + "/assets/images/favorites-banner.png"
                }
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-4">
            <Link>
              <img
                className="img-fluid rounded rounded-4"
                src={process.env.PUBLIC_URL + "/assets/images/scamOrdr.jpg"}
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-4">
            <div className="kfc-basket">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/kfc-meal.png"}
                alt=""
              />
              <h5 className="text-white">
                Adding 11 herbs and spices, Explore our menu and add items to
                your cart.
              </h5>
              <Link>
                <button className="text-uppercase">explore menu</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
