import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './PaginaInicio.css'
import './HomeworkPage.css'
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { downlodContent, showContent, postContent } from "./constants";
import PiePagina from '../Others/PiePagina';
import { useData } from './DataContext';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"t-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"t-pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios y Calificaciones"} redireccion={"t-pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"t-pagina-zoom"} />
    </>
} />

const menu_materias = <>

</>
const menu_mensajes = <>

</>
const menu_alertas = <>

</>
const menu_actualizaciones = <>

</>


export const TeacherContent = () => {
    const { dataClase } = useData();
    const [archivo, setArchivo] = useState(null);
    const [matriculaClase, setMatriculaClase] = useState('');
    const [tipoArchivo, setTipoArchivo] = useState('pdf');
    const [mensaje, setMensaje] = useState('');
    const [archivos, setArchivos] = useState([]);
    const [mensaje2, setMensaje2] = useState('');

    const obtenerContenido = async () => {
            
        try {
            const response = await axios.get(showContent, {
                params: {
                    matricula: dataClase.matricula_clase
                }
            });
            setArchivos(response.data);
        } catch (error) {
            console.error('Error al obtener el contenido:', error);
            setMensaje2('Error al obtener el contenido.');
        }
    };

    const handleArchivoChange = (event) => {
        setArchivo(event.target.files[0]);
    };

    const descargarContenido = async (id_archivo, nombreArchivo) => {
        try {
            const response = await axios.get(`${downlodContent}?id_archivo=${id_archivo}`, {
                responseType: 'blob',
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${nombreArchivo}`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error al descargar contenido:', error);
            throw error;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!archivo) {
            setMensaje('Por favor seleccione un archivo.');
            return;
        }

        const formData = new FormData();
        formData.append('archivo', archivo);
        formData.append('matricula_clase', matriculaClase);
        formData.append('tipo_archivo', tipoArchivo);

        try {
            const response = await axios.post(postContent, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setMensaje(response.data.message);
            obtenerContenido();
        } catch (error) {
            setMensaje('Error al subir el archivo.');
            console.error('Error al subir el archivo:', error);
        }
    };
    const barra_superior = (
        <BarraSuperior
            texto_cabecera={dataClase.nombre_clase}
            menu_materias={menu_materias}
            menu_mensajes={menu_mensajes}
            menu_alertas={menu_alertas}
            menu_actualizaciones={menu_actualizaciones}
            redireccion={'teacher-home'}
            profile_redireccion={'t-profile-page'}
        />
    );

    return (
        <div className="contenedor-pagina">
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-holder">
                    <h2>Subir Contenido</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="archivo">Seleccionar archivo:</label>
                            <input type="file" id="archivo" onChange={handleArchivoChange} />
                        </div>
                        <div>
                            <label htmlFor="matriculaClase">Matrícula de la clase:</label>
                            <input type="text" id="matriculaClase" value={matriculaClase} onChange={(e) => setMatriculaClase(dataClase.matricula_clase)} />
                        </div>
                        <div>
                            <label htmlFor="tipoArchivo">Tipo de archivo:</label>
                            <select id="tipoArchivo" value={tipoArchivo} onChange={(e) => setTipoArchivo(e.target.value)}>
                                <option value="pdf">PDF</option>
                                <option value="pptx">PPTX</option>
                                <option value="xlsx">XLSX</option>
                            </select>
                        </div>
                        <div className='ingresar-mat'>
                            <button type="submit">Subir Archivo</button>
                        </div>
                    </form>
                    {mensaje && <p>{mensaje}</p>}
                    <button onClick={obtenerContenido}>Mostrar Contenido</button>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre del Archivo</th>
                                <th>Tipo de Archivo</th>
                                <th>Descargar Archivo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {archivos.map((archivo, index) => (
                                <tr key={index}>
                                    <td>{archivo.nombre_archivo}</td>
                                    <td>{archivo.tipo_archivo}</td>
                                    <td>
                                        <span className='descargar-pdf-alumno' onClick={() => descargarContenido(archivo.id_archivo, archivo.nombre_archivo)}>Descargar</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {mensaje2 && <p>{mensaje2}</p>}
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    );
};