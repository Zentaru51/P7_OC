import React from "react";
import { useParams } from "react-router-dom";
import Collapse from "../../Components/Collapse/Collapse";
import Caroussel from "../../Components/Caroussel/Caroussel";
import data from "../../data/data.json";
import Rating from "../../Components/Rating/rating";
import "./Housing.css";

function Housing() {
  const { id } = useParams();
  const dataHousing = data.find((Element) => Element.id === id);
  return (
    <div className="container-housing">
      <Caroussel pictures={dataHousing.pictures} title={dataHousing.title} />
      <div className="content">
        <div className="bloc-left">
          <div className="location">
            <b>{dataHousing.title}</b>
            <p>{dataHousing.location}</p>
          </div>
          <div className="tags">
            <ul>
              {dataHousing.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bloc-right">
          <div className="host">
            <p>{dataHousing.host.name}</p>
            <img src={dataHousing.host.picture} alt="host" />
          </div>
          <Rating rating={dataHousing.rating}/>
        </div>
      </div>

      <div className="text-collapse">
        <Collapse description={dataHousing.description} title="Description" />
        <Collapse description={dataHousing.equipments} title="Equipements"/>
      </div>
    </div>
  );
}
export default Housing;
