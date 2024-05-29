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
import GoogleForm from '../Others/GoogleForm'; 


const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios"} redireccion={"pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Diagnostica"} redireccion={"pagina-evaluacion"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Final"} redireccion={"pagina-evaluacionfi"} />
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


const StudentForm = () => {
    const { dataClase } = useData(); // Obtiene los datos del contexto

    const barra_superior = <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"} />
    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title"><h1>Encuesta</h1></div>
                <div className="h-holder">
                    <div className="h-content">
                        <p>¡Aquí está la encuesta diagnostico!</p>
                        <GoogleForm />
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}

export default StudentForm;