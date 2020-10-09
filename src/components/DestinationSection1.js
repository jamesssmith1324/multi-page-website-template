import React from "react";
import ImgContainer from "./ImgContainer";
import "./DestinationSection1.css"

function Section1(props) {
  return (
    <div className="dSContain">
      <ImgContainer img={props.img} imageText={props.imageText} />
      <div className="dSText">
        <h2>{props.sectionHeading}</h2>
        <p>{props.mainText}</p>
      </div>
    </div>
  );
}

export default Section1;
 