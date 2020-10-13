import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbarContainer">
          <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
            TRVL<i className="fa fa-globe" aria-hidden="true"></i>
          </Link>
          <div className="menuIcon" onClick={handleClick}>
            <i
              className={click ? "fa fa-times" : "fa fa-bars"}
              aria-hidden="true"></i>
          </div>
          <ul className={click ? "navMenu active" : "navMenu"}>
            <li className="navItem">
              <Link to="/" className="navLinks" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link
                to="/services"
                className="navLinks"
                onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            {/* <li className="navItem">
              <Link
                to="/products"
                className="navLinks"
                onClick={closeMobileMenu}>
                Products
              </Link>
            </li> */}
            <li className="navItem">
              <Link
                to="/signup"
                className="navLinksMobile"
                onClick={closeMobileMenu}>
                Sign Up 
              </Link>
            </li>
          </ul>
          {button && <Button form={false} to="/signup" checkButtonStyle="btnOutline" checkButtonSize="btnMedium" type="submit" text="Sign Up" />}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
