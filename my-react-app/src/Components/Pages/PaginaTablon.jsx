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
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios"} redireccion={"pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Diagnostica"} redireccion={"pagina-evaluacion"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Final"} redireccion={"pagina-evaluacionfi"} />
        <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"pagina-zoom"} />
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

const anuncios_tablon = <>
    <AnuncioTablon nombre={'Instructor'} fecha={'5/9/2024'} titulo={'Foro: '} descripcion={' Expresa tus opiniones y comparte tus ideas con el resto del mundo manteniendo el contacto en este foro.'} />
</>

export const PaginaTablon = () => {
    const { dataClase } = useData();
    console.log(dataClase);
    const barra_superior = <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"}/>

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <ContenidoTablon imagen_materia={require("../Assets/materia.jpg")} anuncios_tablon={anuncios_tablon} redireccion={"pagina-zoom"}/>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}