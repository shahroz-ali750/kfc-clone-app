import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import FoodItems from "./FoodItems";

export default function FoodMenu() {
  return (
    <section className="py-3">
      <div className="container">
        <h2 className="text-white items-title">explore menu</h2>
        <div className="my-4">
          <Splide aria-label="My Favorite Images" options={{ perPage: 5 }}>
            <SplideSlide>
              <FoodItems img={"zinger"} itemName={"Everyday Value"} />
            </SplideSlide>
            <SplideSlide>
              <FoodItems img={"zinger-combo"} itemName={"Ala-cart-&-Combos"} />
            </SplideSlide>
            <SplideSlide>
              <FoodItems img={"promotion"} itemName={"Promotion"} />
            </SplideSlide>
            <SplideSlide>
              <FoodItems img={"signature-boxes"} itemName={"Signature-boxes"} />
            </SplideSlide>
            <SplideSlide>
              <FoodItems img={"family-festival-3"} itemName={"Sharing"} />
            </SplideSlide>
            <SplideSlide>
              <FoodItems img={"snack-bucket"} itemName={"Snacks-&-Beverages"} />
            </SplideSlide>
            <SplideSlide>
              <FoodItems
                img={"midnight-12"}
                itemName={"Midnight(starts at 12am)"}
              />
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
}
