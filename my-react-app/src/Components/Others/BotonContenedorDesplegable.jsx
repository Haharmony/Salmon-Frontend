import React from "react";
import "./BotonContenedorDesplegable.css";

const BotonContenedorDesplegable = ({ onClick, isCollapsed }) => {
  return (
    <button className="boton-contenedor-desplegable" onClick={onClick}>
      <img
        className="imagen" src={require("../img/desplegar.png")} alt="desplegar"/>
    </button>
  );
};

export default BotonContenedorDesplegable;