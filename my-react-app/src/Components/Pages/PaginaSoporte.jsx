import React from 'react'
import './PaginaInicio.css';
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { ContenidoSoporte } from '../Others/ContenidoSoporte';

const barra_inferior = <BarraInferior contenido={
  <>
    <BotonBarraInferior imagenSrc={require("../Assets/noticias.png")} texto={"Noticias"} redireccion={"pagina-noticias"} />
    <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"20/23/2004"} redireccion={"pagina-calendario"} />
    <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"pagina-tutoriales"} />
    <BotonBarraInferior imagenSrc={require("../Assets/bancorecursos.png")} texto={"Banco de recursos"} redireccion={"pagina-bancoRecursos"} />
    <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"pagina-directorio"} />
    <BotonBarraInferior imagenSrc={require("../Assets/soporte.png")} texto={"Soporte"} redireccion={"pagina-soporte"} />
  </>
}/>

const PaginaSoporte= () => {
  return (
    <div className='contenedor-pagina'>
      <Cabecera contenidosuperior = {<BarraSuperior/>} contenidoInferior={barra_inferior} />
      <ContenidoSoporte />
      <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
      <footer>Pie de pagina</footer>
    </div>
  )
}

export default PaginaSoporte;