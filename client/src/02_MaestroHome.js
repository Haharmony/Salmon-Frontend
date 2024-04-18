import React from 'react';
import { useNavigate  } from 'react-router-dom'; // Importa el hook useHistory

const PaginaInicioMaestro = () => {
    const navigation = useNavigate();

const handleDirectoryButtonClick = () => {
    // Reemplaza '/directorio' con la ruta de tu página de directorio
   navigation("/directorio");
  };

  const handleSubirPdfButtonClick = () => {
    // Reemplaza '/directorio' con la ruta de tu página de directorio
   navigation("/02_FileUploadForm");
  };
  const handleCalificarPdfButtonClick = () => {
    // Reemplaza '/directorio' con la ruta de tu página de directorio
   navigation("/CalificarTareas");
  };
  return (
    <div>
      <h1>Bienvenido Maestro</h1>
      <button onClick={handleDirectoryButtonClick}>
        Ir al directorio
      </button>
      <button onClick={handleSubirPdfButtonClick}>
        Subir tarea
      </button>
      <button onClick={handleCalificarPdfButtonClick}>
        Calificar tareas
      </button>
    </div>
  );
};

export default PaginaInicioMaestro;