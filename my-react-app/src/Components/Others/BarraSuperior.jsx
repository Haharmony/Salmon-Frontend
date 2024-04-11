import React from "react";
import './BarraSuperior.css';
import "./BotonDesplegableBarraSuperior";
import  "./BotonMenuDesplegable";
import BotonDesplegableBarraSuperior from "./BotonDesplegableBarraSuperior";
import { BotonMenuDesplegable } from "./BotonMenuDesplegable";
import BotonHome from "./BotonHome";
import imagen_home from "../Assets/home.png"
import imagen_seleccionarRecurso from "../Assets/seleccionarcurso.png"
import imagen_mensajes from "../Assets/mensajes.png"
import imagen_alertasSuscripciones from "../Assets/alertassuscripciones.png"
import imagen_actualizaciones from "../Assets/actualizaciones.png"
import imagen_usuario from "../Assets/usuario.png"
import imagen_herramientas from "../Assets/herramientas.png"

const BarraSuperior = ({texto_cabecera, menu_materias, menu_mensajes, menu_alertas, menu_actualizaciones}) => {
    return (
        <div className="barra-superior">
            <div className="barra-superior-contenedor-izquierdo">
                <BotonHome  redireccion={"pagina-inicio"} imagenSrc={imagen_home}/>
                <p>{texto_cabecera}</p>
            </div>
            <div className="barra-superior-contenedor-central">
                <BotonDesplegableBarraSuperior menu ={
                    <>
                    {menu_materias}
                    </>
                
                } imagenSrc={imagen_seleccionarRecurso} />
                <hr className="barra-superior-division" />
                <BotonDesplegableBarraSuperior menu ={
                    <>
                    {menu_mensajes}
                    </>
                
                }imagenSrc={imagen_mensajes} />
                <BotonDesplegableBarraSuperior menu ={
                    <>
                    {menu_alertas}
                    </>
                
                } imagenSrc={imagen_alertasSuscripciones} />
                <BotonDesplegableBarraSuperior menu ={
                    <>
                    {menu_actualizaciones}
                    </>
                
                }imagenSrc={imagen_actualizaciones} />
            </div>
            <div className="barra-superior-contenedor-derecho">
                <BotonDesplegableBarraSuperior  menu ={
                    <>
                    <BotonMenuDesplegable  redireccion={"/"} texto={"Cerrar Sesion"}/>
                    </>
                
                }imagenSrc={imagen_usuario} texto={"Nombre Apellido Apellido"} />
                <BotonDesplegableBarraSuperior menu ={
                    <>
                    <BotonMenuDesplegable texto={"Configuración 1"}/>
                    <BotonMenuDesplegable texto={"Configuración 2"}/>
                    <BotonMenuDesplegable texto={"Configuración 3"}/>
                    </>
                
                }imagenSrc={imagen_herramientas} />
            </div>
        </div>
    );
};

export default BarraSuperior;