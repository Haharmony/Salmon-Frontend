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
import { BotonMenuDesplegable } from '../Others/BotonMenuDesplegable';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/noticias.png")} texto={"Noticias"} redireccion={"pagina-noticias"} />
        <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"20/23/2004"} redireccion={"calendar-page-s"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"pagina-tutoriales"} />
        <BotonBarraInferior imagenSrc={require("../Assets/bancorecursos.png")} texto={"Banco de recursos"} redireccion={"pagina-bancoRecursos"} />
        <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"directory"} />
        <BotonBarraInferior imagenSrc={require("../Assets/soporte.png")} texto={"Soporte"} redireccion={"/pagina-soporte"} />
    </>
} />

const menu_materias = <>
    <BotonMenuDesplegable texto={'Materia 1'} redireccion={'/pagina-tablon'} />
    <BotonMenuDesplegable texto={'Materia 2'} redireccion={'/pagina-tablon'} />
    <BotonMenuDesplegable texto={'Materia 3'} redireccion={'/pagina-tablon'} />
</>
const menu_mensajes = <>
    <BotonMenuDesplegable texto={'Mensaje 1'} />
    <BotonMenuDesplegable texto={'Mensaje 2'} />
    <BotonMenuDesplegable texto={'Mensaje 3'} />
</>
const menu_alertas = <>
    <BotonMenuDesplegable texto={'Alerta 1'} />
    <BotonMenuDesplegable texto={'Alerta 2'} />
    <BotonMenuDesplegable texto={'Alerta 3'} />
</>
const menu_actualizaciones = <>
    <BotonMenuDesplegable texto={'Actualizacion 1'} />
    <BotonMenuDesplegable texto={'Actualizacion 2'} />
    <BotonMenuDesplegable texto={'Actualizacion 3'} />
</>
const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"} />

function CalendarPageStudent() {
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

export default CalendarPageStudent;