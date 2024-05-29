import React from 'react'
import './PaginaInicio.css'
import './HomeworkPage.css'
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { useNavigate } from 'react-router-dom';
import PiePagina from '../Others/PiePagina';
import { useData } from './DataContext';
import { deleteCourse } from "./constants";
import axios from 'axios';

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/tablon.png")} texto={"Tablón"} redireccion={"a-pagina-tablon"} />
        <BotonBarraInferior imagenSrc={require("../Assets/contenido.png")} texto={"Contenido"} redireccion={"a-pagina-content"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Ejercicios"} redireccion={"a-pagina-tareas"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Diagnostica"} redireccion={"a-pagina-evaluacion"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tareas.png")} texto={"Evaluación Final"} redireccion={"a-pagina-evaluacionfi"} />
        <BotonBarraInferior imagenSrc={require("../Assets/herramientas.png")} texto={"Eliminar Curso"} redireccion={"a-delete-course"} />
    </>
} />

const menu_materias = <>

</>
const menu_mensajes = <>

</>
const menu_alertas = <>

</>
const menu_actualizaciones = <>

</>

export const AdminDeleteCourse = () => {
    const { dataClase } = useData();
    const navigate = useNavigate();
    const navigateToMenu = () => {
        navigate("/admin-home")
    }

    const deleteClaseEntry = async () => {
        try {
          const response = await axios.delete(deleteCourse, {
            data: { id_clase: dataClase.id_clase },
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          console.log('Clase eliminada:', response.data);
          navigateToMenu();
        } catch (error) {
          console.error('Error eliminando la clase:', error);
          if (error.response) {
            // El servidor respondió con un estatus fuera del rango 2xx
            console.error('Error data:', error.response.data);
            console.error('Error status:', error.response.status);
          } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('Error request:', error.request);
          } else {
            // Algo ocurrió al preparar la solicitud
            console.error('Error message:', error.message);
          }
        }
      };

    const barra_superior = <BarraSuperior texto_cabecera={dataClase.nombre_clase} menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"admin-home"} profile_redireccion={"a-profile-page"} />

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="homework-container">
                <div className="h-title">
                    <h1>Eliminar Curso</h1>
                    <div className="button"><button onClick={deleteClaseEntry}>Eliminar</button></div>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    )
}