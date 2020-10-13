import React from "react";

import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer"
import CreateAccount from "../CreateAccount"

export default function SignUp() {
  return (<React.Fragment>
    <HeroSection backgroundImg="/images/img-13.jpg" mainTitle="SIGN UP"/>
    <CreateAccount />
    <Footer />
  </React.Fragment>)
}
