import React from "react";
import Section1 from "../DestinationSection1";
import Section2 from "../DestinationSection2";
import HeroSection from "../HeroSection"
import CardItem from "../CardItem";
import Footer from "../Footer"

export default function Destination(props) {
  const data = props.location.state;
  return (
    <div className="destination">
      <HeroSection mainTitle={data.title} backgroundImg={data.img[0]}/>
      <Section1
        imageText={data.imgText}
        img={data.img[1]}
        sectionHeading="About"
        mainText={data.text}
      />
      <Section2 video={data.video}/>
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
      <Footer />
    </div>
  );
}
