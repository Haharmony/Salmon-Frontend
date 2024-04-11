import React from "react";
import './BotonMenuDesplegable.css'
import { Navigate, useNavigate } from "react-router-dom";

export const BotonMenuDesplegable = ({texto, redireccion}) =>{
    const navigate = useNavigate();
    const navigateToMenu = () => {
        navigate(redireccion)
    };

    return(
        <button onClick= {navigateToMenu} className="boton-menu-desplegable">
            <div className="texto"> {texto} </div>
        </button>
    )
}