import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FoodMenu from "../components/FoodMenu";
import BestSeller from "../components/BestSeller";
import TopDeals from "../components/TopDeals";
import OnlineOrder from "../components/OnlineOrder";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <section class="content">
        <div class="container">
          <FoodMenu />
          <BestSeller />
          <TopDeals />
          <OnlineOrder />
        </div>
        <Footer />
      </section>
    </>
  );
}
