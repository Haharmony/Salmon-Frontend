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

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"t-calendar-page"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"t-pagina-tutoriales"} />
        <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"t-directory"} />
        <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"t-pagina-entregables-pdf"} />
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
const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"teacher-home"} profile_redireccion={"t-profile-page"} />

function TeacherCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title"><h1>Calendario</h1></div>
                <div className="cal-holder">
                    <div className='app'>
                        <div className='calendar-container'>
                            <Calendar onChange={setDate} value={date} />
                        </div>
                        <p className='text-center'>
                            <span className='bold'>Selected Date:</span>{' '}
                            {date.toDateString()}
                        </p>
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/lawbackground23.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}

export default TeacherCalendar;