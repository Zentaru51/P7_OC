import React from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "../../Components/Card/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Banner />
      <div className="logement-section">
        <Card />
      </div>
    </div>
  );
}
export default Home;
