import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div id="footer">
      <div className="font-awesome">
        <FontAwesomeIcon icon={faFacebook} className="font" />
        <FontAwesomeIcon icon={faTwitter} className="font" />
        <FontAwesomeIcon icon={faInstagram} className="font" />
      </div>
    </div>
  );
};

export default Footer;
