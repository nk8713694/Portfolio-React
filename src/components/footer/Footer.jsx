/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import {
  FaAngellist,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/nitish-prasad-kushwaha/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/nk8713694">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Nitish Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
