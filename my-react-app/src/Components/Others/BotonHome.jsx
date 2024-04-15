import React from "react";
import './BotonHome.css';
import {useNavigate} from "react-router-dom";

const BotonHome = ({ imagenSrc, redireccion }) => {
    const navigate = useNavigate();
    const navigateToMenu = () => {
        const absolutePath = `/${redireccion}`;
        navigate(absolutePath);
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