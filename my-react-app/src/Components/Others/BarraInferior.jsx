import React from 'react';
import './BarraInferior.css';

const BarraInferior = ({contenido}) => {
  return (
    <div className='barra-inferior'>
        {contenido}
    </div>
  );
};

export default BarraInferior;