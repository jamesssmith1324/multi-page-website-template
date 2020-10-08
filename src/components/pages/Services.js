import React from "react";
import ImgContainer from "../ImgContainer";
import CardItem from "../CardItem";
import "../../App.css";
import "./Services.css";

export default function Services() {
  return (
    <React.Fragment>
      <h1 className="services">SERVICES</h1>
      <div className="cardsContainer">
        <div className="cardsWrapper">
          <ul className="cardsItems">
            <CardItem
              src="images/img-10.jpg"
              text="Book your flight now"
              label="Flying"
              path="/destination"
            />
            <CardItem
              src="images/img-11.jpg"
              text="Find the perfect place to stay while you go away."
              label="Hotel"
              path="/destination"
            />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
