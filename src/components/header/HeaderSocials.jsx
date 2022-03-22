import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/adrian-chapa-25281985/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/achapadev" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/CodeChapa" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
