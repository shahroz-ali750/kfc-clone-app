import React from "react";
import { Link } from "react-router-dom";

export default function OnlineOrder() {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 my-2">
            <Link>
              <img
                className="img-fluid rounded rounded-4"
                src={process.env.PUBLIC_URL + "assets/images/pickup-banner.png"}
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-6 my-2">
            <Link>
              <img
                className="img-fluid rounded rounded-4"
                src={
                  process.env.PUBLIC_URL + "assets/images/favorites-banner.png"
                }
                alt=""
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-lg-6 my-2">
            <Link>
              <img
                className="img-fluid rounded rounded-4"
                src={process.env.PUBLIC_URL + "assets/images/scamOrdr.jpg"}
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
