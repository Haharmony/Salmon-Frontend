import React, { useState } from "react";
import "./ContenedorDesplegable.css";
import imagen_desplegar  from '../Assets/desplegar.png'

const ContenedorDesplegable = ({ titulo, contenido }) => {
  // Estado local para controlar la visibilidad del contenido
  const [isVisible, setIsVisible] = useState(true);

  // Función para alternar la visibilidad del contenido al hacer clic en el botón
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="contenedor-desplegable">
      <div className="cabecera-contenedor-desplegable">
        {/* Botón para alternar la visibilidad del contenido */}
        <button className="boton" onClick={toggleVisibility}>
          <img className="imagen" src={imagen_desplegar} alt="desplegar"/>
        </button>
        {/* Título del contenedor */}
        <p className="texto">{titulo}</p>
      </div>
      {/* Barra divisoria */}
      <hr className="barra-divisoria" />
      {/* Contenido condicionalmente renderizado */}
      {isVisible && <div className="contenido">{contenido}</div>}
    </div>
  );
};

export default ContenedorDesplegable;