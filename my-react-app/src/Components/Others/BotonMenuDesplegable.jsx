import React from "react";
import './BotonMenuDesplegable.css'

export const BotonMenuDesplegable = ({texto, redireccion}) =>{
    const navigateToMenu = () => {
        window.location.href = redireccion;
    };

    return(
        <button onClick= {navigateToMenu} className="boton-menu-desplegable">
            <div className="texto"> {texto} </div>
        </button>
    )
}