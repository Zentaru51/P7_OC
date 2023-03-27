import React, { useState } from "react";
import Vector from "../../Assets/Vector.svg";
import "./Collapse.css";

function Collapse({ title, description }) {
  const [isOpen, setisOpen] = useState(false);
  const [rotate, setRotate] = useState("180deg");

  function CollapseInput() {
    setisOpen(!isOpen);
    setRotate(rotate === "180deg" ? "0deg" : "180deg");
  }

  return (
    <div className="collapse">
      <div className="title" onClick={CollapseInput}>
        {title}
        <button>
          <img
            className="vector"
            src={Vector}
            style={{ rotate: `${rotate}` }}
            alt="Fleche"
          />
        </button>
      </div>
      <div className={isOpen ? "description" : "hidden"}>
        {title === "Equipements" ? (
          <div className="listEquipment">
            {description.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </div>
        ) : (
          description
        )}
      </div>
    </div>
  );
}

export default Collapse;
