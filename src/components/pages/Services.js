import React from "react";
import CardItem from "../CardItem";
import "../Cards.css"
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import TextBlock from "../TextBlock";
import DestinationSection1 from "../DestinationSection1"

export default function Services() {
  return (
    <React.Fragment>
      <HeroSection backgroundImg="/images/img-14.jpg" mainTitle="SERVICES"/>
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
      <TextBlock text="veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exerci"/>
      <DestinationSection1 img="images/img-3.jpg" imageText="5 Star Service" sectionHeading="The Best Service" mainText="psa quae ab illo inventore veritatsit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad "/>
      <Footer />
    </React.Fragment>
  );
}
