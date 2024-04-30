import React from "react";
import './BarraSuperior.css';
import "./BotonDesplegableBarraSuperior";
import "./BotonMenuDesplegable";
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
import logoBackground from '../Assets/logo.jpeg'
import { useData } from '../Pages/DataContext'; 

const BarraSuperior = ({ texto_cabecera, menu_materias, menu_mensajes, menu_alertas, menu_actualizaciones, redireccion, profile_redireccion }) => {

    const { data } = useData(); 

    return (
        <div className="barra-superior">
            <div className="barra-superior-contenedor-izquierdo">
                <div className="logo-home"> <img src={logoBackground} alt="" /></div>
                <BotonHome redireccion={redireccion} imagenSrc={imagen_home} />
                <p>{texto_cabecera}</p>
            </div>
            <div className="barra-superior-contenedor-central">

            </div>
            <div className="barra-superior-contenedor-derecho">
                <BotonDesplegableBarraSuperior menu={
                    <>
                        <BotonMenuDesplegable redireccion={profile_redireccion} texto={"Ver Perfil"} />
                        <BotonMenuDesplegable redireccion={""} texto={"Cerrar Sesion"} />
                    </>

                } imagenSrc={imagen_usuario} texto={data.nombre + " " + data.apellido} />
            </div>
        </div>
    );
};

export default BarraSuperior;