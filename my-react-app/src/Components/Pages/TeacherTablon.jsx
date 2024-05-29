import React from 'react'
import './PaginaInicio.css'
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { ContenidoTablon } from '../Others/ContenidoTablon';
import { AnuncioTablon } from '../Others/AnuncioTablon';
import { useData } from './DataContext';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"t-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"t-pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios"} redireccion={"t-pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Diagnostica"} redireccion={"t-pagina-evaluacion"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Final"} redireccion={"t-pagina-evaluacionfi"} />
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



export const TeacherTablon = () => {
    const { dataClase } = useData();
    const { data } = useData();
    console.log(dataClase);
    const barra_superior = <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"teacher-home"} profile_redireccion={"t-profile-page"}/>
    const anuncios_tablon = <>
    <AnuncioTablon nombre={'Instructor'} fecha={'5/9/2024'} titulo={'Foro: '} descripcion={' Expresa tus opiniones y comparte tus ideas con el resto del mundo manteniendo el contacto en este foro.'} />
    </>

    return (

        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <ContenidoTablon imagen_materia={require("../Assets/materia.jpg")} anuncios_tablon={anuncios_tablon} redireccion={"t-pagina-zoom"}/>
            <PiePagina imagenSrc={require('../Assets/lawbackground23.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}