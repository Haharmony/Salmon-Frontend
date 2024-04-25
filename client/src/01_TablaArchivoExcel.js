import React, { useState } from 'react';
import axios from 'axios';

//const apiMostrarExcel = 'http://192.168.1.89:3000/api/archivosXMLS/mostrarExcel';
//const apiDescargarExcel ='http://192.168.1.89:3000/api/archivosXMLS/descargarExcel';
//const apiEliminarExcel ='http://192.168.1.89:3000/api/archivosXMLS/eliminarExcel';
const apiMostrarExcel = 'http://34.70.85.26:3000/api/archivosXMLS/mostrarExcel';
const apiDescargarExcel ='http://34.70.85.26:3000/api/archivosXMLS/descargarExcel';
const apiEliminarExcel ='http://34.70.85.26:3000/api/archivosXMLS/eliminarExcel';



const TablaArchivoExcel = () => {
  const [archivos, setArchivos] = useState([]);
  const [error, setError] = useState('');
  const [matricula, setMatricula] = useState('');

  const handleMostrarArchivos = async () => {
    try {
      const response = await axios.get(apiMostrarExcel);
      setArchivos(response.data);
    } catch (error) {
      setError('Error al cargar archivos');
      console.error('Error al cargar archivos:', error);
    }
  };

  const handleDescargarArchivo = async (idArchivo) => {
    try {
      const response = await axios.get(`${apiDescargarExcel}?idArchivo=${idArchivo}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${idArchivo}.xlsx`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  const handleEliminarArchivo = async (idArchivo) => {
    try {
      await axios.delete(`${apiEliminarExcel}?idArchivo=${idArchivo}`);
      console.log('Archivo eliminado exitosamente.');
      alert("Excel eliminado correctamente");
     handleMostrarArchivos();
      // Puedes agregar aquí una lógica adicional después de eliminar el archivo, como actualizar la lista de archivos.
    } catch (error) {
      console.error('Error al eliminar el archivo:', error);
    }

  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Ingrese matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <button onClick={handleMostrarArchivos}>Mostrar Archivos</button>
      </div>
      {error && <p>{error}</p>}
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
          {archivos.map((archivo, index) => (
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
    </div>
  );
};

export default TablaArchivoExcel;