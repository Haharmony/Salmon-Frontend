import React from 'react'
import './PaginaInicio.css'
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { ContenidoTablon } from '../Others/ContenidoTablon';
import { AnuncioTablon } from '../Others/AnuncioTablon';
import { useData } from './DataContext';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"a-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"a-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios y Calificaciones"} redireccion={"a-pagina-tareas"} />
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


const anuncios_tablon = <>
    <AnuncioTablon nombre={'Lic. Martinez'} fecha={'01/03/2024'} titulo={'Cambio de salon'} descripcion={'Debido a las actividades que se llevaran a cabo la siguiente semana las clases seran en otro salón'} />
    </>

export const AdminPaginaTablon = () => {
    const { dataClase } = useData();
    console.log(dataClase);
    const barra_superior = <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"admin-home"} profile_redireccion={"a-profile-page"}/>

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <ContenidoTablon imagen_materia={require("../Assets/materia.jpg")} anuncios_tablon={anuncios_tablon}/>
            <PiePagina imagenSrc={require('../Assets/lawbackground23.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}