import React from "react";
import './BotonMenuDesplegable.css'
import { useNavigate } from "react-router-dom";

export const BotonMenuDesplegable = ({texto, redireccion}) =>{
    const navigate = useNavigate();
    const navigateToMenu = () => {
        const absolutePath = `/${redireccion}`;
        navigate(absolutePath);
    };

    return(
        <button onClick= {navigateToMenu} className="boton-menu-desplegable">
            <div className="texto"> {texto} </div>
        </button>
    )
}