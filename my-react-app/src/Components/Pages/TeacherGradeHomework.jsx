import React, { useState } from 'react'
import './PaginaInicio.css'
import './HomeworkPage.css'
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useData } from './DataContext';
import {mostrarTareaApiAlumno,descargarPDFApiAlumno,updateCalificacionApiAlumno} from "./constants";

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"t-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"t-pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios"} redireccion={"t-pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Diagnostica"} redireccion={"t-pagina-evaluacion"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Final"} redireccion={"t-pagina-evaluacionfi"} />
        <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"t-pagina-zoom"} />
    </>
} />

const menu_materias =<>

</>
const menu_mensajes =<>

</>
const menu_alertas =<>

</>
const menu_actualizaciones =<>

</>

const TeacherGradeHomework = () => {
    const { data } = useData();
    const { dataClase } = useData();
    const [tareas, setTareas] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [calificacion, setCalificacion] = useState('');
    const navigateToMenu = () => {
        navigate("/t-pagina-tareas")
    };

    const barra_superior = <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"teacher-home"} profile_redireccion={"t-profile-page"}/>

    const handleMostrarTareas = async () => {
        if (data) {
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

    const handleDescargarTarea = async (idArchivo, nombreArchivo) => {
        try {
            const response = await axios.get(`${descargarPDFApiAlumno}?id_archivo=${idArchivo}`, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${nombreArchivo}`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error al descargar la tarea:', error);
        }
    };

    const handleCalificarTarea = async (idArchivo, nueva_calificacion) => {
        try {
            const response = await axios.put(updateCalificacionApiAlumno, null, {
                params: {
                    id_archivo: idArchivo,
                    nueva_calificacion: nueva_calificacion
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                alert('Calificación actualizada.');
                handleMostrarTareas();
            } else {
                alert('Error al actualizar calificación.');
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    };

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title">
                    <h1>Calificar Tareas</h1>
                    <div className="button"><button onClick={navigateToMenu}>Regresar a Tareas</button></div>
                </div>
                <div className="h-holder">
                    <div className='ingresar-mat'>
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
                                <th>Calificación Actual</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tareas.map((tarea, index) => (
                                <tr key={index}>
                                    <td>{tarea.nombre_archivo}</td>
                                    <td>{tarea.matricula_clase}</td>
                                    <td>
                                        <button onClick={() => handleDescargarTarea(tarea.id_archivo, tarea.nombre_archivo)}>Descargar</button>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            onChange={(e) => {
                                                setCalificacion(e.target.value);
                                            }}
                                        />
                                    </td>
                                    <td>
                                        <button onClick={() => handleCalificarTarea(tarea.id_archivo, calificacion)}>Calificar</button>
                                    </td>
                                    <td>{tarea.calificacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TeacherGradeHomework;