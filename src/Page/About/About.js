import React from "react";
import Banner from "../../Components/Banner/Banner";
import Collapse from "../../Components/Collapse/Collapse";
import "./About.css";

function About() {
  return (
    <div className="container-about">
      <Banner />
      <Collapse
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        title="Fiabilité"
      />
      <Collapse
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        title="Respect"
      />
      <Collapse
        description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        title="Service"
      />
      <Collapse
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        title="Responsabilité"
      />
    </div>
  );
}
export default About;
