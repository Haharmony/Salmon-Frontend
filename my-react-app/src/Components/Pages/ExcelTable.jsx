import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiMostrarExcel, apiDescargarExcel, apiEliminarExcel } from "./constants";

export const ExcelTable = () => {
  const [IdArchivos, setIdArchivo] = useState([]);
  const [message, setMessage] = useState('');
  const [matricula, setMatricula] = useState('');
  const navigate = useNavigate();

  const handleMostrarArchivos = async () => {
    try {
      const response = await axios.get(apiMostrarExcel);
      setIdArchivo(response.data);
    } catch (error) {
      setMessage('Error al cargar archivos');
      console.error('Error al cargar archivos:', error);
    }
  };

  const handleDescargarArchivo = async (idArchivo, nombreArchivo) => {
    try {
      const response = await axios.get(`${apiDescargarExcel}?id_archivo=${idArchivo}`, { responseType: 'blob' });
      console.log(response.data);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${nombreArchivo}`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading Excel file:', error);
      setMessage('Hubo un error al descargar el archivo Excel');
    }
  };

  const handleEliminarArchivo = async (idArchivo) => {
    try {
      await axios.delete(`${apiEliminarExcel}?id_archivo=${idArchivo}`);
      console.log('Archivo eliminado exitosamente.');
      alert("Excel eliminado correctamente");
      handleMostrarArchivos();
    } catch (error) {
      console.error('Error al eliminar el archivo:', error);
    }
  };

  const handleRegresarButton = () => {
    navigate("/admin-home");
  };

  return (
    <div className='full-page'>
      <div className="container1">
        <div>
          <button onClick={handleMostrarArchivos}>Mostrar Archivos</button>
        </div>
        {message && <p>{message}</p>}
        <table>
          <thead>
            <tr>
              <th>Nombre de archivo</th>
              <th>Matrícula del administrador</th>
              <th>Fecha y hora de subida</th>
              <th>Descargar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {IdArchivos.map((archivo, index) => (
              <tr key={index}>
                <td>{archivo.nombre_archivo}</td>
                <td>{archivo.matricula_admin}</td>
                <td>{archivo.fecha_hora_subida}</td>
                <td>
                  <span className='descargar-pdf-alumno' onClick={() => handleDescargarArchivo(archivo.id, archivo.nombre_archivo)}>Descargar</span>
                </td>
                <td>
                  <span className='descargar-pdf-alumno' onClick={() => handleEliminarArchivo(archivo.id)}>Eliminar</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="underline2"></div>
        <div className='return-home'>
          <span onClick={handleRegresarButton}>Regresar Home</span>
        </div>
      </div>
    </div>
  );
};
