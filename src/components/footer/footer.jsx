import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Santosh.
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">My Skills</a>
        </li>
        <li>
          <a href="#services">My Blog</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/santu8ak" style={{ "--i": 1 }} target="_blank" rel="noreferrer">
          <i class="bx bxl-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/santosh-s-817b36279/" style={{ "--i": 4 }} target="_blank" rel="noreferrer">
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://twitter.com/santosh_c_" style={{ "--i": 3 }} target="_blank" rel="noreferrer">
          <i class="bx bxl-twitter"></i>
        </a>
        
      </div>
      <div className="footer__copyright">
        <small>&copy; Santosh Portfolio .All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;