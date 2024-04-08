import React from "react";
import './BotonBarraInferior.css';




const BotonBarraInferior = ( {imagenSrc, texto, redireccion}) => {

    const navigateToMenu = () => {
        window.location.href = redireccion;
    };

    return (
        <button onClick={navigateToMenu} className="boton-barra-inferior">
            <img src= {imagenSrc} alt="Imagen" className="imagen-boton-barra-inferior" />
            <span className="texto-boton-barra-inferior">{texto}</span>      
        </button>        
    )
}

export default BotonBarraInferior;