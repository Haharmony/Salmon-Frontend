import React from 'react'
import './ProfilePage.css';
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import profileImage from '../Assets/usuario.png';
import { useData } from './DataContext';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"calendar-page"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"a-pagina-tutoriales"} />
        <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"directory"} />
        <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"pagina-entregables"} />
    </>
} />
const menu_materias =<>

</>
const menu_mensajes =<>

</>
const menu_alertas =<>

</>
const menu_actualizaciones =<>

</>

const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"admin-home"} profile_redireccion={"a-profile-page"} />

export const AdminProfilePage = () => {
    const { data } = useData();

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="profile-container">
                <div className="profile-title"><h1>Perfil</h1></div>
                <div className="profile-holder">
                    <div className="profile-contents">
                        <div className="profile-image">
                            <img src={data.imagen} alt={profileImage} />
                        </div>
                        <div className="data-container">
                            <div className="name-text">Nombre</div>
                            <input type="text" placeholder={data.nombre} />
                            <div className="name-text">Apellidos</div>
                            <input type="text" placeholder={data.apellido}/>
                            <div className="name-text">Correo Electronico</div>
                            <input type="text" placeholder={data.email}/>
                            <div className="name-text">Matricula</div>
                            <input type="text" placeholder={data.matricula}/>
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