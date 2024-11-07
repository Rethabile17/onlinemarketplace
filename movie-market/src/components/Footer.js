import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";  
import logo from "../assests/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
      <div className="footer-top"></div>
        <img src={logo} className="footer-img" alt="logo of the movie" />
        
        
        <div className="footer-address">
          <p>kimberley, 8301</p>
          <p>South Africa</p>
        </div>

        <div className="footer-copyright">
          <FontAwesomeIcon icon={faCopyright} />
          <span>All rights reserved 2024</span>
        </div>

        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">About</a>
        </div>

        <div className="footer-contact-container">
          <h1 className="footer-contact-header">Contact</h1>
          <p>+27 68 342 3344</p>
          <p>Akiramovies@gmail.com</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          
          <p className="footer-terms">Terms & Condition</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
