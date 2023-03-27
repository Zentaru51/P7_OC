import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
    <div className="bodyNotFound">
        <div className="blocNotFound">
            <strong>404</strong>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    </div>
    );
}
export default NotFound;