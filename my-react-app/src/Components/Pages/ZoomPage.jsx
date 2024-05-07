import React, { useState } from 'react'
import './PaginaInicio.css'
import './HomeworkPage.css'
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import axios from 'axios';
import { useData } from './DataContext'; // Importa el contexto
import { getLinks } from "./constants";


const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"a-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios y Calificaciones"} redireccion={"pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"pagina-zoom"} />
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
const barra_superior = <BarraSuperior texto_cabecera={'Materia 1'} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"} />

const ZoomPage = () => {
    const { data } = useData(); // Obtiene los datos del contexto
    const [links, setUltimoLink] = useState([]);
    const [showLinks, setShowLinks] = useState(false);
    const [error, setError] = useState('');

    const fetchLinks = async () => {
        if (data) {
            console.log(data.matricula);
            try {
                const response = await axios.get(`${getLinks}?matricula_alumno=${data.matricula}`);
                setUltimoLink(response.data.data);
                console.log(response.data);
                setError('');
                console.log(error);
                setShowLinks(true);
            } catch (error) {
                console.error('Error obteniendo el último enlace de Zoom:', error);
                setError('No se pudo obtener el último enlace de Zoom');
            }
        }
    };

    const handleFetchLinks = async () => {
        if (!showLinks) {
            // Si los enlaces no se están mostrando, cargarlos
            await fetchLinks();
            console.log("Funcionó hasta aqui.");
        } else {
            // Si los enlaces se están mostrando, ocultarlos
            setUltimoLink([]);
            console.log("Funcionó en else.")
            showLinks(false);
        }
    };

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title"><h1>Links de Clases</h1></div>
                <div className="h-holder">
                    <div className="h-content">
                        <div className="mostrar-usuarios">
                            <button onClick={handleFetchLinks}>
                                {showLinks ? 'Ocultar Links clases' : 'Ver Links clases'}
                            </button>
                        </div>
                        {showLinks && (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre de la Clase</th>
                                        <th>Enlace Zoom</th>
                                        <th>Fecha</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {links.map((link, index) => (
                                        <tr key={index}>
                                            <td>{link.matricula_clase}</td>
                                            <td>{link.url}</td>
                                            <td>{link.fecha}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}

export default ZoomPage;