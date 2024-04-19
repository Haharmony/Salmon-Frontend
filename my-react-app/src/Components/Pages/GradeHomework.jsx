import React, { useState } from 'react'
import './PaginaInicio.css'
import './HomeworkPage.css'
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { BotonMenuDesplegable } from '../Others/BotonMenuDesplegable';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useData } from './DataContext';
import {mostrarTareaApiAlumno,descargarPDFApiAlumno,updateCalificacionApiAlumno} from "./constants";

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"/a-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"/a-pagina-contenido"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Tareas y calificaciones"} redireccion={"/a-pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"/a-pagina-zoom"} />
        <BotonBarraInferior imagenSrc={require("../Assets/correo.png")} texto={"Correo"} redireccion={"/a-pagina-correo"} />
    </>
} />

const menu_materias = <>
    <BotonMenuDesplegable texto={'Materia 1'} redireccion={'/a-pagina-tablon'} />
    <BotonMenuDesplegable texto={'Materia 2'} redireccion={'/a-pagina-tablon'} />
    <BotonMenuDesplegable texto={'Materia 3'} redireccion={'/a-pagina-tablon'} />
</>
const menu_mensajes = <>
    <BotonMenuDesplegable texto={'Mensaje 1'} />
    <BotonMenuDesplegable texto={'Mensaje 2'} />
    <BotonMenuDesplegable texto={'Mensaje 3'} />
</>
const menu_alertas = <>
    <BotonMenuDesplegable texto={'Alerta 1'} />
    <BotonMenuDesplegable texto={'Alerta 2'} />
    <BotonMenuDesplegable texto={'Alerta 3'} />
</>
const menu_actualizaciones = <>
    <BotonMenuDesplegable texto={'Actualizacion 1'} />
    <BotonMenuDesplegable texto={'Actualizacion 2'} />
    <BotonMenuDesplegable texto={'Actualizacion 3'} />
</>
const barra_superior = <BarraSuperior texto_cabecera={'Materia 1'} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"admin-home"} profile_redireccion={"a-profile-page"} />

const GradeHomework = () => {
    const { data } = useData(); // Obtiene los datos del contexto
    const [tareas, setTareas] = useState([]);
    const [matricula, setMatricula] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const navigateToMenu = () => {
        navigate("/a-pagina-tareas")
    };

    const handleMostrarTareas = async () => {
        if (data) {
            try {
                const response = await axios.get(mostrarTareaApiAlumno, {
                    params: {
                        matricula: data.matricula // Utiliza la matrícula ingresada en el input
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
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title">
                    <h1>Calificar Tareas</h1>
                    <div className="button"><button onClick={navigateToMenu}>Regresar a Tareas</button></div>
                </div>
                <div className="h-holder">
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
            </div>
        </div>
    )

}

export default GradeHomework;