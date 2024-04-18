import React, { useState } from 'react';
import axios from 'axios';
import { useData } from './DataContext'; // Importa el contexto

const mostrarTareaApi = 'http://192.168.1.89:3000/api/archivos_pdf/mostrarTareas';
const descargarPDFApi = 'http://192.168.1.89:3000/api/archivos_pdf/descargarPDF';
//const mostrarTareaApi = 'http://172.102.0.78:3000/api/archivos_pdf/mostrarTareas';
//const descargarPDFApi = 'http://172.102.0.78:3000/api/archivos_pdf/descargarPDF';
//const mostrarTareaApi = 'http://34.70.85.26:3000/api/archivos_pdf/mostrarTareas';
//const descargarPDFApi = 'http://34.70.85.26:3000/api/archivos_pdf/descargarPDF';



const TareasTable = () => {
  const { data } = useData(); // Obtiene los datos del contexto
  const [tareas, setTareas] = useState([]);
  const [matricula, setMatricula] = useState('');
  const [error, setError] = useState('');

  const handleMostrarTareas = async () => {
    if (data) {
      try {
        const response = await axios.get(mostrarTareaApi, {
          params: {
            matricula: data.matricula
          }
        });
        setTareas(response.data.data);
        setError('');
      } catch (error) {
        setError('Error al obtener las tareas.');
        console.error('Error:', error);
      }
    }
  };

  const handleDescargarTarea = async (idArchivo) => {
    try {
      const response = await axios.get(`${descargarPDFApi}?idArchivo=${idArchivo}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${idArchivo}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error al descargar la tarea:', error);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Ingrese matricula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
        />
        <button onClick={handleMostrarTareas}>Mostrar Tareas</button>
      </div>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Nombre Archivo</th>
            <th>Matrícula de Clase</th>
            <th>Descargar Tarea</th>
          </tr>
        </thead>
        <tbody>
          {tareas.map((tarea, index) => (
            <tr key={index}>
              <td>{tarea.nombre_archivo}</td>
              <td>{tarea.matricula_clase}</td>
              <td>
                <button onClick={() => handleDescargarTarea(tarea.id_archivo)}>Descargar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TareasTable;
