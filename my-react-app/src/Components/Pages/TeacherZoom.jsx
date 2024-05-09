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
import { getLinkTeacher } from "./constants";


const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"t-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"t-pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios y Calificaciones"} redireccion={"t-pagina-tareas"} />
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


const TeacherZoom = () => {
    const { data } = useData();
    const { dataClase } = useData();
    const [links, setLinks] = useState([]);
    const [showLinks, setShowLinks] = useState(false);

    const barra_superior = <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"teacher-home"} profile_redireccion={"t-profile-page"} />

    const fetchLinks = async () => {
        if (data) {
            try {
                const response = await axios.get(getLinkTeacher, {
                    params: {
                        matricula_maestro: data.matricula // Utiliza la matrícula del estudiante desde el contexto
                    }
                });
                setLinks(response.data.data);
                setShowLinks(true); // Mostrar los enlaces cuando se cargan
            } catch (error) {
                console.error('Error al obtener los enlaces:', error);
            }
        }
    };

    const handleFetchLinks = async () => {
        if (!showLinks) {
            // Si los enlaces no se están mostrando, cargarlos
            await fetchLinks();
        } else {
            // Si los enlaces se están mostrando, ocultarlos
            setLinks([]);
            setShowLinks(false);
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

export default TeacherZoom;