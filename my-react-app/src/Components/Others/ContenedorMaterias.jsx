import React, { useState, useEffect } from 'react';
import './ContenedorMaterias.css';
import BotonMateria from './BotonMateria';
import imagen_materia from '../Assets/materia.jpg';
import axios from 'axios';
import { getClases } from '../Pages/constants';
import { useData } from '../Pages/DataContext';

const ContenedorMaterias = ({ redireccionB }) => {
  const [materias, setMaterias] = useState([]);
  const { setClaseData } = useData();

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await axios.get(getClases);
        setMaterias(response.data);
      } catch (error) {
        console.error('Error al obtener las materias:', error);
      }
    };

    fetchMaterias();
  }, []);

  const editarClase = (val) => {
    setClaseData(val);
    console.log("Valores de clase: ", val);
  };

  return (
    <div className="contenedor-materias">
      {materias.map((materia, index) => (
        <BotonMateria
          key={index}
          imagen={imagen_materia}
          nombre={materia.nombre_clase}
          descripcion={materia.descripcion}
          salon={materia.matricula_clase}
          profesor={materia.matricula_maestro}
          redireccion={redireccionB}
          onEditarClase={() => editarClase(materia)}
        />
      ))}
    </div>
  );
};

export default ContenedorMaterias;