import React, { useState } from 'react'
import './PaginaInicio.css'
import './HomeworkPage.css'
import './CalendarPage.css'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import PiePagina from '../Others/PiePagina';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { getLinksDate } from './constants';
import axios from 'axios';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"calendar-page-s"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"pagina-tutoriales"} />
        <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"directory-s"} />
        <BotonBarraInferior imagenSrc={require("../Assets/noticias.png")} texto={"Constancia"} redireccion={"pagina-constancia"} />
        <BotonBarraInferior imagenSrc={require("../Assets/soporte.png")} texto={"Soporte"} redireccion={"pagina-soporte"} />
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
const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"} />

function CalendarPageStudent() {
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState("");
    const [links, setLinks] = useState([]);

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    const handleDates = async () => {
        try {
            const formattedDate = formatDate(date);
            const response = await axios.get(`${getLinksDate}?fecha=${formattedDate}`);
            console.log(date);
            setLinks(response.data);
            if (response.data.length === 0) {
                setError('No hay links existentes.');
            }
        } catch (error) {
            console.error('Error al obtener enlaces.', error);
            setError('Error al cargar links.');
        } finally {
            console.log('Capybara.');
        }
    };

    return (
        <div className="contenedor-pagina">
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title">
                    <h1>Calendario</h1>
                </div>
                <div className="cal-holder">
                    <div className="app">
                        <div className="calendar-container">
                            <Calendar onClickDay={(date) => { setDate(date) }} value={date} />
                        </div>
                        <p className="text-center">
                            <span className="bold">Selected Date:</span> {date.toDateString()}
                        </p>
                        <div className="get-links-date"><button onClick={handleDates}>Mostrar links</button></div>
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
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/lawbackground23.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    );
}

export default CalendarPageStudent;