import React from "react";
import './BotonBarraInferior.css';
import { useNavigate } from "react-router-dom";



const BotonBarraInferiorAdmin = ( {imagenSrc, texto, redireccion}) => {
    const navigate = useNavigate();
    const navigateToMenu = () => {
        const absolutePath = `/${redireccion}`;
        navigate(absolutePath);
    };

    return (
        <button onClick={navigateToMenu} className="boton-barra-inferior">
            <img src= {imagenSrc} alt="Imagen" className="imagen-boton-barra-inferior" />
            <span className="texto-boton-barra-inferior">{texto}</span>      
        </button>        
    )
}

export default BotonBarraInferiorAdmin;