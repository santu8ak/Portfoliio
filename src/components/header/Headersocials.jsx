import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Headersocials = () => {
  return (
    <div className="header__socials">
      <a href="" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default Headersocials;
