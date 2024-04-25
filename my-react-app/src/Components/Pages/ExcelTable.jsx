import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { apiMostrarExcel, apiDescargarExcel, apiEliminarExcel } from "./constants";

export const ExcelTable = () => {
  const [idArchivo, setIdArchivo] = useState([]);
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

  const handleDescargarArchivo = async (idArchivo) => {
    try {
      const response = await axios.get(`${apiDescargarExcel}?id_archivo=${idArchivo}`, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `excel_${idArchivo}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading Excel file:', error);
      setMessage('Hubo un error al descargar el archivo Excel');
    }
  };

  const handleEliminarArchivo = async (idArchivo) => {
    try {
      await axios.delete(`${apiEliminarExcel}?idArchivo=${idArchivo}`);
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
          <input
            type="text"
            placeholder="Ingrese matrícula"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
          />
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
            {idArchivo.map((archivo, index) => (
              <tr key={index}>
                <td>{archivo.nombre_archivo}</td>
                <td>{archivo.matricula_admin}</td>
                <td>{archivo.fecha_hora_subida}</td>
                <td>
                  <button onClick={() => handleDescargarArchivo(archivo.id)}>Descargar</button>
                </td>
                <td>
                  <button onClick={() => handleEliminarArchivo(archivo.id)}>Eliminar</button>
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