import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer p-5">
      <div className="container">
        <div className="social-container">
          <div className="text-center">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/logo192.png"}
              alt=""
            />
          </div>
          {/* <div className="footer-line"></div> */}
          {/* <div class="social-icons">
            <Link
              to="https://www.youtube.com/channel/UCg4hfdWApV0Uea6aFW7PZUg"
              target="blank">
              <i class="bi bi-youtube"></i>
            </Link>
            <Link
              to="https://www.instagram.com/kfcpakistanofficial/?hl=en"
              target="blank">
              <i class="bi bi-instagram"></i>
            </Link>
            <Link to="https://www.facebook.com/KFCPakistan/" target="blank">
              <i class="bi bi-facebook"></i>
            </Link>
          </div> */}
          <div className="row">
            <div class="col-12 col-md-3 col-lg-3">
              <ul class="footer-info">
                <Link to="/about-us">
                  <li>About Us</li>
                </Link>
                <Link to="/mitao-bhook">
                  <li>Mitao Bhook</li>
                </Link>
                <Link to="/mitao-bhook-scholarship">
                  <li>Mitao Bhook - Scholarship</li>
                </Link>
                <Link to="/privacy-policy">
                  <li>Privacy Policy</li>
                </Link>
                <Link to="/careers-page">
                  {" "}
                  <li>Careers</li>
                </Link>
              </ul>
            </div>
            <div class="col-12 col-md-3 col-lg-3">
              <ul class="footer-info">
                <Link to="/Contact-Us">
                  <li>Contact Us</li>
                </Link>
                <Link to="/store-locations">
                  <li>Store Locator</li>
                </Link>
                <Link to="/track-order">
                  <li>Track Order</li>
                </Link>
              </ul>
            </div>
            <div class=" col-12 col-md-3 col-lg-3">
              <ul class="footer-info">
                <Link to="/terms-condition">
                  <li>Terms &amp; Conditions</li>
                </Link>
              </ul>
            </div>
            <div className="col-12 col-md-3 col-lg-3">
              <div className="app-kfc">
                <Link
                  to="https://apps.apple.com/us/app/kfc-pakistan/id1480491422"
                  target="_blank">
                  <img
                    className="mt-3"
                    src={process.env.PUBLIC_URL + "/assets/images/download.png"}
                    alt=""
                  />
                </Link>
                <Link
                  to="https://play.google.com/store/apps/details?id=io.bramerz.kfc&amp;hl=en&amp;gl=US"
                  target="_blank">
                  <img
                    className="mt-3"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/google-download.png"
                    }
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="powerd-by kfc-all-rights mt-2 d-flex justify-content-between align-items-end">
          <h6 class="m-0 text-white">2023 KFC. All rights reserved</h6>
        </div>
      </div>
    </div>
  );
}
