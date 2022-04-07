import React from 'react';
import './footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Adrian
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/adrian-chapa-25281985/">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/CodeChapa">
          <FaTwitter />
        </a>
        <a href="https://github.com/achapadev">
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Adrian Chapa. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
