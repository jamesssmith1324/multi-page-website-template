import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import data from "../destinationData";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cardsContainer">
        <div className="cardsWrapper">
          <ul className="cardsItems">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/destination"
              data={data[0]}
              internal={true}
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the islands of Bali in a Private Crusie"
              label="Luxury"
              path="/destination"
              data={data[1]}
              internal={true}

            />
          </ul>
          <ul className="cardsItems">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/destination"
              data={data[2]}
              internal={true}

            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/destination"
              data={data[3]}
              internal={true}

            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/destination"
              data={data[4]}
              internal={true}

            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
