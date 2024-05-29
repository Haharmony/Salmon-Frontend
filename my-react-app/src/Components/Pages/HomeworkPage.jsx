import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useData } from './DataContext';
import './PaginaInicio.css';
import './HomeworkPage.css';
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import PiePagina from '../Others/PiePagina';
import { mostrarTareaApi, descargarPDFApi, postPDFApiAlumno } from "./constants";

const barra_inferior = (
    <BarraInferior contenido={
        <>
            <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"pagina-tablon"} />
            <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"pagina-content"} />
            <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios"} redireccion={"pagina-tareas"} />
            <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Diagnostica"} redireccion={"pagina-evaluacion"} />
            <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Final"} redireccion={"pagina-evaluacionfi"} />
            <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"pagina-zoom"} />
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



export const HomeworkPage = () => {
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
        <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"} />
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

    const handleSubmitPDF = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('archivo', selectedFile);
            formData.append('matricula_clase', matriculaClase);
            const response = await axios.post(postPDFApiAlumno, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.data.success) {
                setMessage('Archivo Excel subido exitosamente');
                alert(message);
                // Realizar acciones adicionales después de subir el archivo
            } else {
                setMessage('Hubo un error al subir el archivo Excel');
            }
        } catch (error) {
            console.error('Error uploading Excel file:', error);
            setMessage('Hubo un error al subir el archivo Excel');
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
                        <h2>Subir Tarea PDF</h2>
                        <form onSubmit={handleSubmitPDF}>
                            <div className='pdf-class-id'>
                                <label>Matrícula de Clase:</label>
                                <div><input type="text" value={matriculaClase} onChange={(e) => setMatriculaClase(e.target.value)} /></div>
                            </div>
                            <div className='pdf-file'>
                                <label>Archivo PDF: </label>
                                <input type="file" accept=".pdf" onChange={handleFileChange} />
                            </div>
                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            <button className='upload-pdf' type="submit">Subir PDF</button>
                        </form>
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}

export default HomeworkPage;
