import React from 'react'
import './PaginaInicio.css';
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { ContenidoDirectorios } from '../Others/ContenidoDirectorio';
import { BotonMenuDesplegable } from '../Others/BotonMenuDesplegable';

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

const menu_materias =<>
  <BotonMenuDesplegable texto={'Materia 1'} redireccion={'pagina-tablon'}/>
  <BotonMenuDesplegable texto={'Materia 2'} redireccion={'pagina-tablon'}/>
  <BotonMenuDesplegable texto={'Materia 3'} redireccion={'pagina-tablon'}/>
</>
const menu_mensajes =<>
<BotonMenuDesplegable texto={'Mensaje 1'} />
<BotonMenuDesplegable texto={'Mensaje 2'} />
<BotonMenuDesplegable texto={'Mensaje 3'} />
</>
const menu_alertas =<>
<BotonMenuDesplegable texto={'Alerta 1'} />
<BotonMenuDesplegable texto={'Alerta 2'} />
<BotonMenuDesplegable texto={'Alerta 3'} />
</>
const menu_actualizaciones =<>
<BotonMenuDesplegable texto={'Actualizacion 1'} />
<BotonMenuDesplegable texto={'Actualizacion 2'} />
<BotonMenuDesplegable texto={'Actualizacion 3'} />
</>
const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} />
export const Paginadirectorio= () => {
  return (
    <div className='contenedor-pagina'>
      <Cabecera contenidosuperior = {barra_superior} contenidoInferior={barra_inferior} />
      <ContenidoDirectorios />
      <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
      <footer>Pie de pagina</footer>
    </div>
  )
}
