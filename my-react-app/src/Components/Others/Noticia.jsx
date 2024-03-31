// Noticia.js
import React from 'react';
import './Noticia.css';

const Noticia = ({ titulo, descripcion, imagen }) => {
  return (
    <div className="noticia">
      <h2 className="titulo">{titulo}</h2>
      <p className="descripcion">{descripcion}</p>
      <img src={imagen} alt={titulo} className="imagen" />
    </div>
  );
};

export default Noticia;