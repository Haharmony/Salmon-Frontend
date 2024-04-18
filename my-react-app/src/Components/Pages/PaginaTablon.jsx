import React from 'react'
import './PaginaInicio.css'
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { BotonMenuDesplegable } from '../Others/BotonMenuDesplegable';
import { ContenidoTablon } from '../Others/ContenidoTablon';
import { AnuncioTablon } from '../Others/AnuncioTablon';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"/pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"/pagina-contenido"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Tareas y calificaciones"} redireccion={"/pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/zoom.png")} texto={"Zoom"} redireccion={"/pagina-zoom"} />
        <BotonBarraInferior imagenSrc={require("../Assets/correo.png")} texto={"Correo"} redireccion={"/pagina-correo"} />
    </>
} />

const menu_materias = <>
    <BotonMenuDesplegable texto={'Materia 1'} redireccion={'/pagina-tablon'}/>
  <BotonMenuDesplegable texto={'Materia 2'} redireccion={'/pagina-tablon'}/>
  <BotonMenuDesplegable texto={'Materia 3'} redireccion={'/pagina-tablon'}/>
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
const barra_superior = <BarraSuperior texto_cabecera={'Materia 1'} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"}/>

const anuncios_tablon = <>
    <AnuncioTablon nombre={'Lic. Martinez'} fecha={'01/03/2024'} titulo={'Cambio de salon'} descripcion={'Debido a las actividades que se llevaran a cabo la siguiente semana las clases seran en otro salón'} />
    <AnuncioTablon nombre={'Lic. Martinez'} fecha={'12/03/2024'} titulo={'Reposición de clase'} imagen={require('../Assets/usuario.png')} descripcion={'La ultima clase que fue cancelada sera el dia 01/04/2024 favor de revisar su calendario'} />
</>

export const PaginaTablon = () => {
    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <ContenidoTablon imagen_materia={require("../Assets/materia.jpg")} anuncios_tablon={anuncios_tablon}/>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}