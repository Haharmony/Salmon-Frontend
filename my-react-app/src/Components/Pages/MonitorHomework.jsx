import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './PaginaInicio.css'
import './HomeworkPage.css'
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { useNavigate } from 'react-router-dom';
import PiePagina from '../Others/PiePagina';
import { useData } from './DataContext';
import { mostrarTareaApi, descargarPDFApi} from "./constants";

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"m-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"m-pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios"} redireccion={"m-pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Diagnostica"} redireccion={"a-pagina-evaluacion"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Final"} redireccion={"a-pagina-evaluacionfi"} />
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


export const MonitorHomework = () => {
    const { data } = useData(); // Obtiene los datos del contexto
    const { dataClase } = useData(); // Obtiene los datos del contexto
    const [tareas, setTareas] = useState([]);
    //const [matricula, setMatricula] = useState('');
    const [error, setError] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [matriculaClase, setMatriculaClase] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');

    const barra_superior = (
        <BarraSuperior texto_cabecera={dataClase.nombre_clse} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"} />
    );

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get(mostrarTareaApi, {
                    params: {
                        matricula: data.matricula
                    }
                });
                setTareas(response.data);
                setError('');
            } catch (error) {
                setError('Error al obtener las tareas.');
                console.error('Error:', error);
            }
        };

        if (data) {
            fetchTasks();
        }
    }, [data]);

    const handleDescargarTarea = async (idArchivo, nombreArchivo) => {
        try {
            const response = await axios.get(`${descargarPDFApi}?id_archivo=${idArchivo}`, { responseType: 'blob' });
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

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setErrorMessage('');
        } else {
            setSelectedFile(null);
            setErrorMessage('Por favor, selecciona un archivo PDF.');
        }
    };

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title"><h1>Tareas</h1></div>
                <div className="h-holder">
                    <div className="h-content">
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
                                            <span className='descargar-pdf-alumno' onClick={() => handleDescargarTarea(tarea.id_archivo, tarea.nombre_archivo)}>Descargar</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}