import React from 'react';
import './BotonMateria.css';

const BotonMateria = ({ imagen, nombre, horario, salon, profesor }) => {
  return (
    <botton className="boton-materia">
      <img src={imagen} alt={nombre} className="imagen" />
      <h3 className="nombre">{nombre}</h3>
      <p className="detalle">Horario: {horario}</p>
      <p className="detalle">Salón: {salon}</p>
      <p className="detalle">Profesor: {profesor}</p>
    </botton>
  );
};

export default BotonMateria;