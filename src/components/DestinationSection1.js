import React from "react";
import ImgContainer from "./ImgContainer";

function Section1(props) {
  return (
    <div className="destinationAbout">
      <ImgContainer img={props.img} imageText={props.imageText} />
      <div className="aboutText">
        <h2>About</h2>
        <p>{props.mainText}</p>
      </div>
    </div>
  );
}

export default Section1;
