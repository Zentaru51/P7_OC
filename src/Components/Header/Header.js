import React from "react";
import Navbar from "../navbar/navbar";
import LOGO from "../../Assets/LOGO.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <img className="logo" src={LOGO} alt="logo"></img>
      <Navbar />
    </div>
  );
}
export default Header;
