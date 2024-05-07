import React from 'react'
import './PaginaInicio.css';
import Cabecera from '../Others/Cabecera';
import ContenidoInicio from '../Others/ContenidoInicio';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import ContenedorLinksZoom from '../Others/ContenedorLinksZoom'

const barra_inferior = <BarraInferior contenido={
  <>
    <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"m-calendar-page"} />
    <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"m-pagina-tutoriales"} />
    <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"m-directory"} />
    <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"m-pagina-entregables-pdf"} />
  </>
}/>

const menu_materias =<>

</>
const menu_mensajes =<>

</>
const menu_alertas =<>

</>
const menu_actualizaciones =<>

</>

const cont_links = <>
<ContenedorLinksZoom/>
</>

const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"monitor-home"} profile_redireccion={"m-profile-page"} />

export const MonitorHome= () => {
  return (
    <div className='contenedor-pagina'>
      <Cabecera contenidosuperior = {barra_superior} contenidoInferior={barra_inferior} />
      <ContenidoInicio redireccionC={"/m-pagina-tablon"} b_titulo={"Links de Zoom"} b_contenido={cont_links}/>
      <PiePagina imagenSrc={require('../Assets/lawbackground23.jpg')} />
      <footer>Grupo Derecho & Progreso &copy; 2024</footer>
    </div>
  )
}