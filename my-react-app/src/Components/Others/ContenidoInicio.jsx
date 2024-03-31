import React from "react";
import './ContenidoInicio.css'
import ContenedorDesplegable from "./ContenedorDesplegable";
import ContenedorMaterias from "./ContenedorMaterias";
import Noticia from "./Noticia";
import imagen_capacitacion from '../Assets/capacitacion.png'
import imagen_taller from '../Assets/taller.png'
import imagen_comunicado from '../Assets/comunicado.png'

const ContenidoInicio = () =>{
    return(
        <div className="contenido-inicio">            
            <div className="contenedor-izquierdo">
                <ContenedorDesplegable titulo={'Mis Cursos'} contenido={<ContenedorMaterias/>}/>
                <ContenedorDesplegable titulo={'Calendario de eventos'} contenido={<p>Contenido de calendario</p>} />
            </div>
            <div className="contenedor-derecho">
            <ContenedorDesplegable contenido={
                <div>
                <Noticia titulo={"Capacitacion"} descripcion={"Capacitate para ..."} imagen={imagen_capacitacion} />
                <Noticia titulo={"Taller"} descripcion={"Taller de ..."} imagen={imagen_taller} />
                <Noticia titulo={"Comunicado"} descripcion={"Comunicado importante sobre..."} imagen={imagen_comunicado} />
                <Noticia titulo={"Capacitacion"} descripcion={"Capacitate para ..."} imagen={imagen_capacitacion} />
                
                </div>
            } titulo={'Noticias'}/>
            </div>
        </div>
    )
}

export default ContenidoInicio