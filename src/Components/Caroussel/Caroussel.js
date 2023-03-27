import React, { useState } from "react";
import Vector from "../../Assets/Vector.svg";
import "./Caroussel.css";

function Caroussel({ pictures, title }) {
  const [index, setindex] = useState(0);
  // Pour aller à la slide suivante et/ou repasser à la première s'il se trouve à la dernière
  const nextSlide = () => {
    setindex(index === pictures.length - 1 ? 0 : index + 1);
  };
  // Pour aller à la slide antérieur et/ou passer à la dernière s'il se trouve à la première
  const prevSlide = () => {
    setindex(index === 0 ? pictures.lenght - 1 : index - 1);
  };

  return (
    <div className="slider">
      <img className="images" src={pictures[index]} alt={"Image de " + title} />
      {pictures.length > 1 && (
        <>
          <div className="Vector">
            <img
              className="prevVector"
              src={Vector}
              onClick={() => prevSlide()}
              alt="Fleche"
            />
            <img
              className="nextVector"
              src={Vector}
              onClick={() => nextSlide()}
              alt="Fleche"
            />
          </div>
          <div className="compteur">
            <span>{index + 1 + "/" + pictures.length}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Caroussel;
