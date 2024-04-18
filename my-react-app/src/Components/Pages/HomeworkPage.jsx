import React from 'react'
import './PaginaInicio.css'
import './HomeworkPage.css'
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { BotonMenuDesplegable } from '../Others/BotonMenuDesplegable';

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

export const HomeworkPage = () => {
    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title"><h1>Tareas</h1></div>
                <div className="h-holder">
                    <div className="h-content">No hay tareas</div>
                </div>
            </div>
        </div>
    )
}