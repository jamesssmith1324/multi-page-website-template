import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <section className="footerSubscription">
        <p className="footerSubscriptionHeading">
          Join the Adventure newsletter out best vaction deals
        </p>
        <p className="footerSubscriptionText">
          You can unsubscribe at any time.
        </p>
        <div className="inputArea">
          <input
            className="footerInput"
            type="email"
            name="email"
            placeholder="Your Email"
          />
          <Button buttonStyle="btnOutline">Subscribe</Button>
        </div>
      </section>
      <div className="footerLinks">
        <div className="footerLinkWrapper">
          <div className="footerLinkItems">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footerLinkItems">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
          <div className="footerLinkItems">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footerLinkItems">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
        <section className="socialMedia">
          <div className="socialMediaWrap">
            <div className="footerLogo">
              <Link to="/" className="socialLogo">
                TRVL
                <i className="fab fa-typo3" />
              </Link>
            </div>
            <small className="websiteRights">TRVL © 2020</small>
            <div className="socialIcons">
              <Link
                className="socialIconLink facebook"
                to="/"
                target="_blank"
                aria-label="Facebook">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link
                className="socialIconLink instagram"
                to="/"
                target="_blank"
                aria-label="Instagram">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                className="socialIconLink youtube"
                to="/"
                target="_blank"
                aria-label="Youtube">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
              <Link
                className="socialIconLink twitter"
                to="/"
                target="_blank"
                aria-label="Twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link
                className="socialIconLink twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
