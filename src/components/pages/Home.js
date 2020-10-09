import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";
import Footer from "../Footer";

function Home() {
  return (
    <React.Fragment>
      <HeroSection backgroundImg="/images/img-home.jpg" mainTitle="Adventure Awaits" secondTitle="What are you waiting for?" btns={true} btn1Text="Get Started" btn2Text="Watch Tralier" btn2TextIcon = {<i className="fa fa-play-circle" aria-hidden="true"></i>}/>
      <Cards />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
