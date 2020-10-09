import React from "react";
import CardItem from "../CardItem";
import "../Cards.css"
import "../../App.css";
import HeroSection from "../HeroSection";

export default function Services() {
  return (
    <React.Fragment>
      <HeroSection backgroundImg="/images/img-5.jpg" mainTitle="SERVICES"/>
      <div className="cardsContainer">
        <div className="cardsWrapper">
          <ul className="cardsItems">
            <CardItem
              src="images/img-10.jpg"
              text="Book your flight now"
              label="Flying"
              path="https://www.skyscanner.net/"
              internal={false}

            />
            <CardItem
              src="images/img-11.jpg"
              text="Find the perfect place to stay while you go away."
              label="Hotel"
              path="https://www.booking.com/"
              internal={false}

            />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
