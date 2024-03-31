import React from 'react';
import './Cabecera.css';

const Cabecera = ({contenidosuperior, contenidoInferior}) => {
  return (
    <div className='cabecera'>
      {contenidosuperior}
      <hr className='barra-divisoria'></hr>
      {contenidoInferior}
    </div>
  );
};

export default Cabecera;
