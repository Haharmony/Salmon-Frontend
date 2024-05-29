import React, { useState, useRef } from 'react';
import axios from 'axios';
import './AssignmentPage.css';
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { deleteFolder, createFolder, selectFolder, showFolderContent, downloadFolderContent, deleteFolderContent, uploadFolderContent } from "./constants";
import PiePagina from '../Others/PiePagina';
import { useData } from './DataContext';

const barra_inferior = (
    <BarraInferior contenido={
        <>
            <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"calendar-page"} />
            <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"a-pagina-tutoriales"} />
            <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"directory"} />
            <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"pagina-entregables-pdf"} />
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

const barra_superior = (
    <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"admin-home"} profile_redireccion={"a-profile-page"} />
);

function AssignmentPagePDF() {
    const { data } = useData();
    const [nombreCarpeta, setNombreCarpeta] = useState("");
    const [message, setMessage] = useState("");
    const [carpetas, setCarpetas] = useState([]);
    const [contenidoCarpetas, setContenidoCarpetas] = useState([]);
    const fileInputRef = useRef(null); // Reference to the file input

    const crearCarpeta = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(createFolder, null, {
                params: {
                    matricula: data.matricula,
                    nombre_carpeta: nombreCarpeta,
                },
            });
            alert("Carpeta creada con exito.");
            selectCarpetas();
            return response.data;
        } catch (error) {
            if (error.response) {
                alert("La carpeta NO fue creada con exito.");
                return { success: false, message: error.response.data.message || 'Error creando carpeta' };
            }
            alert("La carpeta NO fue creada con exito.");
            return { success: false, message: error.message };
        }
    };

    const selectCarpetas = async () => {
        try {
            const response = await axios.get(selectFolder, {
                params: {
                    matricula: data.matricula,
                },
            });
            setCarpetas(response.data);
            return response.data;
        } catch (error) {
            if (error.response) {
                return { success: false, message: error.response.data.message || 'Error obteniendo carpetas' };
            }
            return { success: false, message: error.message };
        }
    };

    const handleEliminarCarpeta = async (id_carpeta) => {
        try {
            const response = await axios.delete(deleteFolder, {
                params: {
                    id_carpeta: id_carpeta,
                },
            });
            alert("Carpeta eliminada.");
            selectCarpetas();
            return { success: true, message: 'Carpeta eliminada exitosamente' };
        } catch (error) {
            if (error.response) {
                return { success: false, message: error.response.data.message || 'Error eliminando carpeta' };
            }
            return { success: false, message: error.message };
        }
    };

    const subirContenidoCarp = async (idCarpeta, archivo) => {
        const formData = new FormData();
        formData.append('archivo', archivo);
        formData.append('id_carpeta', idCarpeta);

        try {
            const response = await axios.post(uploadFolderContent, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Archivo subido correctamente.");
            return response.data;
        } catch (error) {
            if (error.response) {
                alert("El archivo no se subió correctamente.");
                return { success: false, message: error.response.data.message || 'Error subiendo contenido' };
            }
            alert("El archivo no se subió correctamente.");
            return { success: false, message: error.message };
        }
    };

    const mostrarContenidoCarpetas = async (idCarpeta) => {
        try {
            const response = await axios.get(showFolderContent, {
                params: {
                    id_carpeta: idCarpeta,
                },
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                return { success: false, message: error.response.data.message || 'Error mostrando contenido' };
            }
            return { success: false, message: error.message };
        }
    };

    const descargarContenidoCarpetas = async (idArchivo) => {
        try {
            const response = await axios.get(downloadFolderContent, {
                params: {
                    id_archivo: idArchivo,
                },
                responseType: 'blob',
            });
            return response.data;
        } catch (error) {
            if (error.response) {
                return { success: false, message: error.response.data.message || 'Error descargando contenido' };
            }
            return { success: false, message: error.message };
        }
    };

    const deleteContenidoCarpeta = async (idArchivo) => {
        try {
            const response = await axios.delete(deleteFolderContent, {
                data: {
                    id_archivo: idArchivo,
                },
            });
            alert("Archivo eliminado.");
            return response.data;
        } catch (error) {
            if (error.response) {
                return { success: false, message: error.response.data.message || 'Error eliminando contenido' };
            }
            return { success: false, message: error.message };
        }
    };

    const handleMostrarContenido = async (idCarpeta) => {
        const response = await mostrarContenidoCarpetas(idCarpeta);
        if (response.success === false) {
            setMessage(response.message);
        } else {

            setContenidoCarpetas(response); 
            console.log(contenidoCarpetas);// Actualiza el estado con el contenido de la carpeta
        }
    };

    const handleSubirContenido = async (e, idCarpeta) => {
        const archivo = e.target.files[0];
        const response = await subirContenidoCarp(idCarpeta, archivo);
        setMessage(response.message);
    };

    const handleDescargarContenido = async (idArchivo) => {
        const response = await descargarContenidoCarpetas(idArchivo);
        if (response.success === false) {
            setMessage(response.message);
        } else {
            const url = window.URL.createObjectURL(new Blob([response]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'archivo.pdf'); // Puedes ajustar el nombre del archivo
            document.body.appendChild(link);
            link.click();
        }
    };

    const handleEliminarContenido = async (idArchivo) => {
        const response = await deleteContenidoCarpeta(idArchivo);
        setMessage(response.message);
    };

    const handleAgregarContenidoClick = (idCarpeta) => {
        fileInputRef.current.setAttribute('data-id-carpeta', idCarpeta);
        fileInputRef.current.click();
    };

    const handleFileInputChange = (e) => {
        const idCarpeta = fileInputRef.current.getAttribute('data-id-carpeta');
        handleSubirContenido(e, idCarpeta);
    };

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="folders-container">
                <div className="assignment-holder">
                    <button onClick={selectCarpetas}>Mostrar Carpetas</button>
                    <form onSubmit={crearCarpeta}>
                        <input type="text" value={nombreCarpeta} onChange={(e) => setNombreCarpeta(e.target.value)} placeholder='Nombre de la carpeta.' />
                        <button type='submit'>Crear Carpeta</button>
                    </form>

                    <div>
                        <ul>
                            {carpetas.map((carpeta) => (
                                <li key={carpeta.id_carpeta}>{carpeta.nombre_carpeta}
                                    <button onClick={() => handleMostrarContenido(carpeta.id_carpeta)}>
                                        Mostrar contenido
                                    </button>
                                    <button onClick={() => handleAgregarContenidoClick(carpeta.id_carpeta)}>
                                        Agregar contenido
                                    </button>
                                    <button onClick={() => handleEliminarCarpeta(carpeta.id_carpeta)}>
                                        Eliminar carpeta
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                    />

                    <table>
                        <thead>
                            <tr>
                                <th>Archivo</th>
                                <th>Descargar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contenidoCarpetas.map((contenido, id) => (
                                <tr key={id}>
                                    <td>{contenido.nombre_archivo}</td>
                                    <td><div className="zoom-url"><span onClick={() => handleDescargarContenido(contenido.id_archivo)}>Descargar</span></div></td>
                                    <td><div className="zoom-url"><span onClick={() => handleEliminarContenido(contenido.id_archivo)}>Eliminar</span></div></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    );
}

export default AssignmentPagePDF;
