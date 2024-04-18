import React from 'react';
import { useNavigate  } from 'react-router-dom'; // Importa el hook useHistory

const PaginaInicioEstudiante = () => {
const navigation = useNavigate();

const handleDirectoryButtonClick = () => {
    // Reemplaza '/directorio' con la ruta de tu página de directorio
   navigation("/directorio");
  };

  const handleClasesButtonClick = () => {
   
    navigation("/03_claseAlumno");
};

const handleClasesTareasButtonClick = () => {
   
  navigation("/03_TareasTable");
};
const handleClasesSubirTareasButtonClick = () => {
   
  navigation("/03_SubirTareasAlumno");
};
  return (
    <div>
      <h1>Bienvenido Alumno</h1>
      <button onClick={handleDirectoryButtonClick}>
        Ir al directorio
      </button>
      <button onClick={handleClasesTareasButtonClick}>
        Ir a tareas
      </button>
      <button onClick={handleClasesSubirTareasButtonClick}>
        Subir Tareas
      </button>
      <button onClick={handleClasesButtonClick}>
                Links Clases
            </button>
    </div>
    
  );
};

export default PaginaInicioEstudiante;