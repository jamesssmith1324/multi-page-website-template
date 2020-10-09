import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection(props) {
  console.log(props)
  return (
    <div className="heroContainer" style={{background: `url(${props.backgroundImg}) center center/cover no-repeat fixed`}}>
      {/* <video src="videos/video-2.mp4" autoPlay loop muted /> */}
      {props.mainTitle? <h1>{props.mainTitle}</h1> : null}
      {props.secondTitle? <p>{props.secondTitle}</p> : null}
      {props.btns? <div className="heroBtns">
        {props.btn1Text? <Button className="btns" buttonStyle="btnOutline" buttonSize="btnLarge">
          {props.btn1Text}
        </Button> : null}
        {props.btn2Text? <Button className="btns" buttonStyle="btnPrimary" buttonSize="btnLarge">
          {props.btn2Text} {props.btn2TextIcon}
        </Button> : null}
      </div> : null}
    </div>
  );
}

export default HeroSection;
