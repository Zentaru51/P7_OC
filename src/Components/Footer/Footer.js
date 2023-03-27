import React from "react";
import "./Footer.css";
import logoFooter from "../../Assets/logoFooter.svg";

function Footer() {
  return (
    <div className="footer-container">
      <img src={logoFooter} alt="logo monochrome"></img>
      <p>
       © 2020 Kasa.All rights reserved
      </p>
    </div>
  );
}
export default Footer;
