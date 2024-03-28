import React from "react";

export default function TopDeals() {
  return (
    <div className="bg-black">
      <div className="container">
        <h2 className="text-uppercase items-title">top deals</h2>
        <div className="row">
          <div className="col-12 col-md-3 col-lg-3 my-3">
            <div
              style={{
                backgroundColor: "#1c1816",
                color: "whitesmoke",
              }}
              className="card top-deals">
              <div className="kfc-box">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <img
                className="img-fluid card-img-top card-img zoom"
                src={process.env.PUBLIC_URL + "/assets/images/wrap.png"}
                alt=""
              />
              <div />
              <div className="card-body p-0">
                <h5 className="text-capitalize card-title">twister combo</h5>
                <span>
                  <div>
                    <button className="btn-item">
                      <i class="bi bi-suit-heart"></i>
                    </button>
                  </div>
                </span>
                <p class="card-text">
                  Twister + 1 Regular fries + 1 Regular drink{" "}
                </p>
                <h4 class="kfc-price">Rs 670</h4>
                <div className="price-label">
                  <div>
                    <button class="bi bi-plus register-btn Add-web p-2 px-2">
                      <span>Add to bucket</span>
                    </button>
                    {/* <button class="ri-add-line rgeister-btn Add-mobil px-2">
                        <span>Add to bucket</span>
                      </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 my-3">
            <div>
              <div
                style={{
                  backgroundColor: "#1c1816",
                  color: "whitesmoke",
                  padding: "10px",
                }}
                className="card top-deals">
                <div className="kfc-box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <img
                  className="img-fluid card-img-top card-img zoom"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/zinger-stacker.png"
                  }
                  alt=""
                />
                <div />
                <div className="card-body p-0">
                  <h5 className="text-capitalize card-title">twister combo</h5>
                  <span>
                    <div>
                      <button className="btn-item">
                        <i class="bi bi-suit-heart"></i>
                      </button>
                    </div>
                  </span>
                  <p class="card-text">
                    Twister + 1 Regular fries + 1 Regular drink{" "}
                  </p>
                  <h4 class="kfc-price">Rs 850</h4>
                  <div className="price-label">
                    <div>
                      <button class="bi bi-plus register-btn Add-web p-2 px-2">
                        <span>Add to bucket</span>
                      </button>
                      {/* <button class="ri-add-line rgeister-btn Add-mobil px-2">
                        <span>Add to bucket</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 my-3">
            <div>
              <div
                style={{
                  backgroundColor: "#1c1816",
                  color: "whitesmoke",
                  padding: "10px",
                }}
                className="card top-deals">
                <div className="kfc-box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <img
                  className="img-fluid card-img-top card-img zoom"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/crispy-duo-box.png"
                  }
                  alt=""
                />
                <div />
                <div className="card-body p-0">
                  <h5 className="text-capitalize card-title">twister combo</h5>
                  <span>
                    <div>
                      <button className="btn-item">
                        <i class="bi bi-suit-heart"></i>
                      </button>
                    </div>
                  </span>
                  <p class="card-text">
                    Twister + 1 Regular fries + 1 Regular drink{" "}
                  </p>
                  <h4 class="kfc-price">Rs 1250</h4>
                  <div className="price-label">
                    <div>
                      <button class="bi bi-plus register-btn Add-web p-2 px-2">
                        <span>Add to bucket</span>
                      </button>
                      {/* <button class="ri-add-line rgeister-btn Add-mobil px-2">
                        <span>Add to bucket</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 col-lg-3 my-3">
            <div>
              <div
                style={{
                  backgroundColor: "#1c1816",
                  color: "whitesmoke",
                  padding: "10px",
                }}
                className="card top-deals">
                <div className="kfc-box">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <img
                  className="img-fluid card-img-top card-img zoom"
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/family-festival-3.png"
                  }
                  alt=""
                />
                <div />
                <div className="card-body p-0">
                  <h5 className="text-capitalize card-title">twister combo</h5>
                  <span>
                    <div>
                      <button className="btn-item">
                        <i class="bi bi-suit-heart"></i>
                      </button>
                    </div>
                  </span>
                  <p class="card-text">
                    Twister + 1 Regular fries + 1 Regular drink{" "}
                  </p>
                  <h4 class="kfc-price">Rs 2450</h4>
                  <div className="price-label">
                    <div>
                      <button class="bi bi-plus register-btn Add-web p-2 px-2">
                        <span>Add to bucket</span>
                      </button>
                      {/* <button class="ri-add-line rgeister-btn Add-mobil px-2">
                        <span>Add to bucket</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
