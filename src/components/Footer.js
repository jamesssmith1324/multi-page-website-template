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
      <div class="footerLinks">
        <div className="footerLinkWrapper">
          <div class="footerLinkItems">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footerLinkItems">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footerLinkWrapper">
          <div class="footerLinkItems">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div class="footerLinkItems">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
        <section class="socialMedia">
          <div class="socialMediaWrap">
            <div class="footerLogo">
              <Link to="/" className="socialLogo">
                TRVL
                <i class="fab fa-typo3" />
              </Link>
            </div>
            <small class="websiteRights">TRVL © 2020</small>
            <div class="socialIcons">
              <Link
                class="socialIconLink facebook"
                to="/"
                target="_blank"
                aria-label="Facebook">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link
                class="socialIconLink instagram"
                to="/"
                target="_blank"
                aria-label="Instagram">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </Link>
              <Link
                class="socialIconLink youtube"
                to="/"
                target="_blank"
                aria-label="Youtube">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
              <Link
                class="socialIconLink twitter"
                to="/"
                target="_blank"
                aria-label="Twitter">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link
                class="socialIconLink twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
