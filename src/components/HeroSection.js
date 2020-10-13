import React from "react";
import "../App.css";
import Button from "./Button";
import "./HeroSection.css";

function HeroSection(props) {
  return (
    <div className="heroContainer" style={{background: `url(${props.backgroundImg}) center center/cover no-repeat fixed`}}>
      {/* <video src="videos/video-2.mp4" autoPlay loop muted /> */}
      {props.mainTitle? <h1>{props.mainTitle}</h1> : null}
      {props.secondTitle? <p>{props.secondTitle}</p> : null}
      {props.btns? <div className="heroBtns">
        {props.btn1Text?<Button form={false} to="/signup" checkButtonStyle="btnOutline" checkButtonSize="btnLarge"  type="submit" text={props.btn1Text} />
  : null}
        {props.btn2Text?<Button form={false} to="/signup" checkButtonStyle="btnPrimary" checkButtonSize="btnLarge"  type="submit" text={props.btn2Text} icon={props.btn2TextIcon}/>
 : null}
      </div> : null}
    </div>
  );
}

export default HeroSection;
