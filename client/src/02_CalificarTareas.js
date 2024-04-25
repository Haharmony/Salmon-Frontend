import React, { useState } from 'react';
import axios from 'axios';
import { useData } from './DataContext'; // Importa el contexto

const mostrarTareaApiAlumno = 'http://192.168.1.89:3000/api/archivos_pdf_alumnos/mostrarTareasAlumnos';
const descargarPDFApiAlumno = 'http://192.168.1.89:3000/api/archivos_pdf_alumnos/descargarPDFAlumno';
const updateCalificacionApiAlumno = 'http://192.168.1.89:3000/api/archivos_pdf_alumnos/updateCalificacion';
//const mostrarTareaApiAlumno = 'http://172.102.0.78:3000/api/archivos_pdf_alumnos/mostrarTareasAlumnos';
//const descargarPDFApiAlumno = 'http://172.102.0.78:3000/api/archivos_pdf_alumnos/descargarPDFAlumno';
//const updateCalificacionApiAlumno = 'http://172.102.0.78:3000/api/archivos_pdf_alumnos/updateCalificacion';
//const mostrarTareaApiAlumno = 'http://34.70.85.26:3000/api/archivos_pdf_alumnos/mostrarTareasAlumnos';
//const descargarPDFApiAlumno = 'http://34.70.85.26:3000/api/archivos_pdf_alumnos/descargarPDFAlumno';
//const updateCalificacionApiAlumno = 'http://34.70.85.26:3000/api/archivos_pdf_alumnos/updateCalificacion';



const TareasCalificar = () => {
  const { data } = useData(); // Obtiene los datos del contexto
  const [tareas, setTareas] = useState([]);
  const [matricula, setMatricula] = useState('');
  const [error, setError] = useState('');

  const handleMostrarTareas = async () => {
    if(data){
      try {
        const response = await axios.get(mostrarTareaApiAlumno, {
          params: {
            matricula: data.matricula // Utiliza la matrícula ingresada en el input
          }
        });
        setTareas(response.data);
        setError('');
      } catch (error) {
        setError('Error al obtener las tareas.');
        console.error('Error:', error);
      }
    }
  };

  const handleDescargarTarea = async (idArchivo) => {
    try {
      const response = await axios.get(`${descargarPDFApiAlumno}?idArchivo=${idArchivo}`, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'tarea.pdf');
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error al descargar la tarea:', error);
    }
  };

  const handleCalificarTarea = async (idArchivo, nueva_calificacion) => {
    try {
      await axios.put(updateCalificacionApiAlumno, {
        id_archivo: idArchivo,
        nueva_calificacion: nueva_calificacion
      });
      alert("Calificación actualizada");
      console.log("exito tarea actualizada");
      // Actualizar la lista de tareas después de calificar
      handleMostrarTareas();
    } catch (error) {
      console.error('Error al calificar la tarea:', error);
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
        <button onClick={handleMostrarTareas}>Mostrar Tareas</button>
      </div>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Nombre Archivo</th>
            <th>Matrícula de Clase</th>
            <th>Descargar Tarea</th>
            <th>Calificación</th>
            <th>Calificar Tarea</th>
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
              <td>
                <input
                  type="number"
                  min="0"
                  max="10"
                  value={tarea.calificacion}
                  onChange={(e) => {
                    const newCalificacion = e.target.value;
                    setTareas(prevTareas => {
                      const updatedTareas = prevTareas.map(prevTarea => {
                        if (prevTarea.id_archivo === tarea.id_archivo) {
                          return { ...prevTarea, calificacion: newCalificacion };
                        }
                        return prevTarea;
                      });
                      return updatedTareas;
                    });
                  }}
                />
              </td>
              <td>
                <button onClick={() => handleCalificarTarea(tarea.id_archivo, tarea.calificacion)}>Calificar</button>
              </td>
              <td>{tarea.calificacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TareasCalificar;
