import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div>
        <button
          class="btn btn-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasScrolling"
          aria-controls="offcanvasScrolling">
          <i class="bi bi-list"></i>
        </button>

        <div
          class="offcanvas offcanvas-start"
          data-bs-scroll="false"
          data-bs-backdrop="false"
          tabindex="-1"
          id="offcanvasScrolling"
          aria-labelledby="offcanvasScrollingLabel">
          <div class="offcanvas-header">
            <Link
              style={{
                textDecorationLine: "none",
                backgroundColor: "#ea002a",
                color: "white",
                padding: "0px 9px 0px 9px",
                borderRadius: "5px",
              }}
              to={""}>
              <h4>login</h4>
            </Link>

            {/* <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
              Offcanvas with body scrolling
            </h5> */}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <hr />
          <div class="offcanvas-body">
            <ul>
              <li >
                <Link>Store Locator</Link>
              </li>
              <li>Track Order</li>
              <li>Explore Menu</li>
            </ul>
          </div>
        </div>

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
            src={process.env.PUBLIC_URL + "/assets/images/bucket-filled.png"}
            alt=""
          />
          <Link>login</Link>
        </div>
      </div>
    </div>
  );
}
