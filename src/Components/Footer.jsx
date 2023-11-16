import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Dolphin Dancer</h4>
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/services">Sevices</Link>
              </li>
              <li>
                <Link to="/schedule">Schedules</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Travel Information</h4>
            <ul>
              <li>
                <Link to="/termsandCondition">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow US</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/" target="blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/" target="blank">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/home" target="blank">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="nav justify-content-center border-bottom pb-3 mb-3"></div>
          <div>
            <p className="text-center copyright">
              © DolphinDancer. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
