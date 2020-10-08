import React from "react";
import "./Destination.css";
import Section1 from "../DestinationSection1";

export default function Destination(props) {
  const data = props.location.state;
  return (
    <div className="destination">
      <div
        className="destinationHero"
        style={{ backgroundImage: `url(${data.img[0]})` }}>
        <h1>{data.title}</h1>
      </div>
      <Section1
        imageText={data.imgText}
        img={data.img[1]}
        mainText={data.text}
      />
    </div>
  );
}
