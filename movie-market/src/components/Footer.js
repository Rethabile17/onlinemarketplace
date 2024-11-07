import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"; 
import logo from "../assests/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <img src={logo} className="footer-img" alt="logo of the hotel" />
        <p>kimberley,8301,</p>
        <p>South African</p>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Movies</a>
          <a href="#">About</a>
        </div>
        <div className="contact-container">
          <h1 className="contact-header">Contact</h1>
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
        </div>
       
      </div>
    </div>
  );
}

export default Footer;
