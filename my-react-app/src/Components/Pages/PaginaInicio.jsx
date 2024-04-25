import React from 'react'
import './PaginaInicio.css';
import Cabecera from '../Others/Cabecera';
import ContenidoInicio from '../Others/ContenidoInicio';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';

const barra_inferior = <BarraInferior contenido={
  <>
    <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"20/23/2004"} redireccion={"calendar-page-s"} />
    <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"pagina-tutoriales"} />
    <BotonBarraInferior imagenSrc={require("../Assets/bancorecursos.png")} texto={"Banco de recursos"} redireccion={"pagina-bancoRecursos"} />
    <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"directory-s"} />
    <BotonBarraInferior imagenSrc={require("../Assets/soporte.png")} texto={"Soporte"} redireccion={"pagina-soporte"} />
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

const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"}/>

export const PaginaInicio= () => {
  return (
    <div className='contenedor-pagina'>
      <Cabecera contenidosuperior = {barra_superior} contenidoInferior={barra_inferior} />
      <ContenidoInicio redireccionC={"/pagina-tablon"}/>
      <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
      <footer>Grupo Derecho & Progreso &copy; 2024</footer>
    </div>
  )
}
