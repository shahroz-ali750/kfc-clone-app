import React from "react";

export default function BestSeller() {
  return (
    <section className="">
      <div className="container">
        <h2 className=" text-uppercase text-white items-title">Best Sellers</h2>
        <div className="best-seller my-4">
          <div className="krunch-burger">
            <div className="kfc-box">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="wdp-ribbon wdp-ribbon-two">
              <span class="d-flex align-items-end">
                <h5 class="rs-title mb-0">Rs </h5>
                <h5 class="mb-0 pkr-title">270</h5>{" "}
              </span>
            </span>
            <h6 className="text-white">Krunch Burger</h6>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/krunch-burger.png"}
              alt=""
            />
          </div>
          <div className="krunch-burger">
            <div className="kfc-box">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="wdp-ribbon wdp-ribbon-two">
              <span class="d-flex align-items-end">
                <h5 class="rs-title mb-0">Rs </h5>
                <h5 class="mb-0 pkr-title">520</h5>{" "}
              </span>
            </span>
            <h6 className="text-white">Krunch Combo</h6>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/krunch-combo.png"}
              alt=""
            />
          </div>
          <div className="krunch-burger">
            <div className="kfc-box">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="wdp-ribbon wdp-ribbon-two">
              <span class="d-flex align-items-end">
                <h5 class="rs-title mb-0">Rs </h5>
                <h5 class="mb-0 pkr-title">610</h5>{" "}
              </span>
            </span>
            <h6 className="text-white">Hot Wings Bucket</h6>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/wings-bucket.png"}
              alt=""
            />
          </div>
          <div className="krunch-burger">
            <div className="kfc-box">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span class="wdp-ribbon wdp-ribbon-two">
              <span class="d-flex align-items-end">
                <h5 class="rs-title mb-0">Rs </h5>
                <h5 class="mb-0 pkr-title">700</h5>{" "}
              </span>
            </span>
            <h6 className="text-white">Mighty Zinger</h6>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/mighty-zinger.png"}
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
