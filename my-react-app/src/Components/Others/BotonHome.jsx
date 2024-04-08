import React from "react";
import './BotonHome.css';

const BotonHome = ({ imagenSrc, redireccion }) => {
    const navigateToMenu = () => {
        window.location.href = redireccion;
    };


    return (
        <div className="boton-desplegable-container">
            <button className="boton-desplegable-barra-superior" onClick={navigateToMenu}>
                <img src={imagenSrc} alt="Imagen" className="imagen-boton-barra-superior" />
            </button>
        </div>
    );
};

export default BotonHome;