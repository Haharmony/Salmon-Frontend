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
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"a-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"a-pagina-contenido"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios y Calificaciones"} redireccion={"a-pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"a-pagina-zoom"} />
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
const barra_superior = <BarraSuperior texto_cabecera={'Materia 1'} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"admin-home"} profile_redireccion={"a-profile-page"} />

const AdminZoomPage = () => {
    const { data } = useData(); // Obtiene los datos del contexto
    const [links, setLinks] = useState([]);
    const [showLinks, setShowLinks] = useState(false);

    const fetchLinks = async () => {
        if (data) {
            try {
                const response = await axios.get(getLinks, {
                    params: {
                        matriculaAlumno: data.matricula // Utiliza la matrícula del estudiante desde el contexto
                    }
                });
                setLinks(response.data);
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
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}

export default AdminZoomPage;