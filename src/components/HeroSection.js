import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="heroContainer">
      <video src="videos/video-1.mp4" autoPlay loop muted />
      <h1>Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className="heroBtns">
        <Button className="btns" buttonStyle="btnOutline" buttonSize="btnLarge">
          Get Started
        </Button>
        <Button className="btns" buttonStyle="btnPrimary" buttonSize="btnLarge">
          Watch Trailer <i class="fa fa-play-circle" aria-hidden="true"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
