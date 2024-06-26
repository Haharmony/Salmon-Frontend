import React, { useEffect, useState } from 'react'
import './AssignmentPage.css';
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { useNavigate } from 'react-router-dom';
import PiePagina from '../Others/PiePagina';

const barra_inferior = (
  <BarraInferior contenido={
    <>
      <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"t-calendar-page"} />
      <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"t-pagina-tutoriales"} />
      <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"t-directory"} />
      <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"t-pagina-entregables-pdf"} />
    </>
  } />
);

const menu_materias = <>

</>
const menu_mensajes = <>

</>
const menu_alertas = <>

</>
const menu_actualizaciones = <>

</>

const barra_superior = (
  <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"teacher-home"} profile_redireccion={"t-profile-page"} />
);

export const TeacherAssignment = () => {
  const navigate = useNavigate();
  const navigateToMenu = () => {
    navigate("/t-pagina-entregables-pdf")
  }
  const [folders, setFolders] = useState(() => {
    const storedFolders = localStorage.getItem('folders');
    return storedFolders ? JSON.parse(storedFolders) : [];
  });

  useEffect(() => {
    localStorage.setItem('folders', JSON.stringify(folders));
  }, [folders]);

  const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleGenerateFolder = () => {
    const folderName = prompt('Enter folder name:');
    if (folderName) {
      const newFolder = { name: folderName, files: [] };
      setFolders(prevFolders => [...prevFolders, newFolder]);
    }
  };

  const handleDeleteFolder = (folderIndex) => {
    setFolders(prevFolders => prevFolders.filter((folder, index) => index !== folderIndex));
  };

  const handleRemoveFile = (folderIndex, fileId) => {
    setFolders(prevFolders => {
      const updatedFolders = [...prevFolders];
      updatedFolders[folderIndex].files = updatedFolders[folderIndex].files.filter(file => file.id !== fileId);
      return updatedFolders;
    });
  };

  const handleClearFolders = () => {
    setFolders([]);
  };

  const handleFileInputChange = (event, folderIndex) => {
    const files = event.target.files;
    const updatedFolders = [...folders];
    const updatedFiles = Array.from(files).map(file => ({ id: generateUniqueId(), name: file.name, data: URL.createObjectURL(file) }));
    updatedFolders[folderIndex].files = [...updatedFolders[folderIndex].files, ...updatedFiles];
    setFolders(updatedFolders);
  };

  return (
    <div className='contenedor-pagina'>
      <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
      <div className="folders-container">
        <div className="assignment-title">
          <div className="button"><button onClick={navigateToMenu}>Subir Tarea</button></div>
          <button onClick={handleGenerateFolder}>Generar Carpeta</button>
          <div className="warning-text"><button onClick={handleClearFolders}>Limpiar Carpetas</button> *Elimina todas las carpetas.</div>
        </div>
        <div className="assignment-holder">
          {folders.length > 0 ? (
            folders.map((folder, folderIndex) => (
              <div key={folderIndex} className="folder">
                <div className="folder-header">
                  <div className="folder-underline"></div>
                  <div className='folder-name'>{folder.name}<button onClick={() => handleDeleteFolder(folderIndex)}>Eliminar Carpeta</button></div>
                  <div className="underline-assignments"></div>
                </div>
                <div className="file-handler"><input type="file" onChange={(event) => handleFileInputChange(event, folderIndex)} multiple /></div>
                {folder.files.length > 0 && (
                  <div>
                    <h4>Archivos en esta carpeta:</h4>
                    <ul>
                      {folder.files.map((file) => (
                        <li key={file.id}>
                          {/* Updated anchor tag */}
                          <a href={file.data} download={file.name}>{file.name}</a>
                          <div className="remove-file"><span onClick={() => handleRemoveFile(folderIndex, file.id)}>Eliminar</span></div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="assignment-content">No hay carpetas existentes.</div>
          )}
        </div>
      </div>
      <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
      <footer>Grupo Derecho & Progreso &copy; 2024</footer>
    </div>
  );
};