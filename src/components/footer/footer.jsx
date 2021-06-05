import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="footer-div">
      <Link className="text-footer" to="/contact">
        <p className="footer-paragraph">Made by Damián Pérez</p>
      </Link>
      <FontAwesomeIcon icon={faCode} />
    </div>
  );
}
export default Footer;
