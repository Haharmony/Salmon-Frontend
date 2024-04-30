import React from 'react';
import './BotonMateria.css';
import { useNavigate } from "react-router-dom";

const BotonMateria = ({ imagen, nombre, descripcion, salon, profesor, redireccion, onEditarClase }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Llama a la función onEditarClase y pasa el objeto materia como argumento
    onEditarClase({ nombre, descripcion, salon, profesor });
    navigate(redireccion);
  };

  return (
    <button onClick={handleClick} className="boton-materia">
      <img src={imagen} alt={nombre} className="imagen" />
      <h3 className="nombre">{nombre}</h3>
      <p className="detalle">Descripción: {descripcion}</p>
      <p className="detalle">Matricula de Clase: {salon}</p>
      <p className="detalle">Matricula de Profesor: {profesor}</p>
    </button>
  );
};

export default BotonMateria;