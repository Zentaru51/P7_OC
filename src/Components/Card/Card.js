import React from "react";
import "./Card.css";
import data from "../../data/data.json";
import { Link } from "react-router-dom";

function Card() {
  return data.map((product) => (
    <div className="Card" key={product.id}>
      <Link to={"/Housing/" + product.id}>
        <img src={product.cover} alt={product.title} />
        <div className="card-title">
          <h3>{product.title}</h3>
        </div>
      </Link>
    </div>
  ));
}

export default Card;
