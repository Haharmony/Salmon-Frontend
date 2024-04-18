import React from 'react'
import './ProfilePage.css';
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { BotonMenuDesplegable } from '../Others/BotonMenuDesplegable';
import profileImage from '../Assets/usuario.png';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/noticias.png")} texto={"Noticias"} redireccion={"pagina-noticias"} />
        <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"20/23/2004"} redireccion={"pagina-calendario"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"pagina-tutoriales"} />
        <BotonBarraInferior imagenSrc={require("../Assets/bancorecursos.png")} texto={"Banco de recursos"} redireccion={"pagina-bancoRecursos"} />
        <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"pagina-directorio"} />
        <BotonBarraInferior imagenSrc={require("../Assets/soporte.png")} texto={"Soporte"} redireccion={"pagina-soporte"} />
    </>
} />

const menu_materias = <>
    <BotonMenuDesplegable texto={'Materia 1'} redireccion={'/pagina-tablon'} />
    <BotonMenuDesplegable texto={'Materia 2'} redireccion={'/pagina-tablon'} />
    <BotonMenuDesplegable texto={'Materia 3'} redireccion={'/pagina-tablon'} />
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

const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"pagina-inicio"} profile_redireccion={"profile-page"}/>

export const ProfilePage = () => {
    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="profile-container">
                <div className="profile-title"><h1>Perfil</h1></div>
                <div className="profile-holder">
                    <div className="profile-contents">
                        <div className="profile-image"> 
                            <img src={profileImage} alt="" />
                            <div className='profile-image-text'>Cambiar foto de perfil</div>
                        </div>
                        <div className="data-container">
                            <div className="name-text">Nombre</div>
                            <input type="text" />
                            <div className="name-text">Apellidos</div>
                            <input type="text" />
                            <div className="name-text">Correo Electronico</div>
                            <input type="text" />
                            <div className="constance-header">Constancia de Alumno</div>
                            <div className="constance-field"></div>
                        </div>
                    </div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}
