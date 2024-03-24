import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import FoodMenu from "../components/FoodMenu";
import BestSeller from "../components/BestSeller";
import TopDeals from "../components/TopDeals";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <FoodMenu/>
      <BestSeller/>
      <TopDeals/>
      <Footer />
    </>
  );
}
