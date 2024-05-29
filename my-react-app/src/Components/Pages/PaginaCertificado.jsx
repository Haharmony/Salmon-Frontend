import React, { useState, useEffect } from 'react'
import './PaginaInicio.css';
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { ContenidoSoporte } from '../Others/ContenidoSoporte';
import { mostrarCertificado, descargarCertificado } from "./constants";
import axios from 'axios';
import { useData } from './DataContext';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"calendar-page-s"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"pagina-tutoriales"} />
        <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"directory-s"} />
        <BotonBarraInferior imagenSrc={require("../Assets/noticias.png")} texto={"Constancia"} redireccion={"pagina-constancia"} />
        <BotonBarraInferior imagenSrc={require("../Assets/soporte.png")} texto={"Soporte"} redireccion={"pagina-soporte"} />
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

export const PaginaCertificado = () => {
    const { data } = useData(); // Obtiene los datos del contexto
    const { dataClase } = useData(); // Obtiene los datos del contexto
    const [certificados, setCertificados] = useState([]);

    const [error, setError] = useState('');


    const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"} />


    useEffect(() => {
        const fetchTasks2 = async () => {
            try {
                const response =await axios.get(`${mostrarCertificado}?matricula=${data.matricula}`);
                setCertificados(response.data);
                setError('');
            } catch (error) {
                setError('Error al obtener certificado/s.');
                console.error('Error:', error);
            }
        };

        if (data) {
            fetchTasks2();
        }
    }, [data]);

    const handleDescargarCertificado = async (idArchivo, nombreArchivo) => {
        try {
            const response = await axios.get(`${descargarCertificado}?id_archivo=${idArchivo}`, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${nombreArchivo}`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error al descargar el certificado:', error);
        }
    };


    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title"><h1>Constancias</h1></div>
                <div className="h-holder">
                    <div className="h-content">
                        {error && <p>{error}</p>}
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre Archivo</th>
                                    <th>Matrícula Alumno</th>
                                    <th>Descargar Constancia</th>
                                </tr>
                            </thead>
                            <tbody>
                                {certificados.map((certificado, index) => (
                                    <tr key={index}>
                                        <td>{certificado.nombre_archivo}</td>
                                        <td>{certificado.matricula_alumno}</td>
                                        <td>
                                            <span className='descargar-pdf-alumno' onClick={() => handleDescargarCertificado(certificado.id_archivo, certificado.nombre_archivo)}>Descargar</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}