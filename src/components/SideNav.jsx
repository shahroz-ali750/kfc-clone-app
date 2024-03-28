import React from "react";
import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <>
      <div
        style={{ backgroundColor: "#1c1816" }}
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
            class="btn-close bg-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <hr className="text-white" />
        <div
          style={{ backgroundColor: "#1c1816" }}
          class="offcanvas-body side-nav">
          <ul>
            <Link>
              <li>
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/store-locator.jpg"
                  }
                  alt=""
                />
                Store Locator
              </li>
            </Link>

            <Link>
              <li>
                {" "}
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/tracking-order.jpg"
                  }
                  alt=""
                />
                Track Order
              </li>
            </Link>

            <Link>
              <li>
                {" "}
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/images/explore-menu.jpg"
                  }
                  alt=""
                />
                Explore Menu
              </li>
            </Link>
          </ul>
          <hr className="text-white" />
          <div>
            <ul>
              <Link>
                <li>About Us</li>
              </Link>
              <Link>
                <li>FeedBack</li>
              </Link>
              <Link>
                <li>Terms & Conditions</li>
              </Link>
              <Link>
                <li>Privacy Policy</li>
              </Link>
              <Link>
                <li>Contact Us</li>
              </Link>
              <Link>
                <li>Mitao Bhook</li>
              </Link>
              <Link>
                <li>Mitao Bhook - Scholarship</li>
              </Link>
              <Link>
                <li>Careers</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
