import React from "react";
import { useLocation } from "react-router-dom";
import imageAbout from "../../Assets/imageAbout.jpg";
import imageHome from "../../Assets/ImgHome.jpg";
import imageAboutMobile from "../../Assets/imageAboutMobile.jpg";
import "./Banner.css";

function Banner() {
  let location = useLocation();
  if (location.pathname === "/about") {
    return (
      <div className="banner">
        <img
          src={imageAbout}
          alt="Banner About"
          className="DesktopImageBanner"
        />
        <img
          src={imageAboutMobile}
          alt="Banner About"
          className="MobileImageBanner"
        />
        <div className="BannerEffect"></div>
      </div>
    );
  } else {
    return (
      <div className="banner">
        <img src={imageHome} alt="Banner Home" />
        <div className="BannerEffect"></div>
        <p className="Banner-title">Chez vous, partout et ailleurs</p>
      </div>
    );
  }
}

export default Banner;
