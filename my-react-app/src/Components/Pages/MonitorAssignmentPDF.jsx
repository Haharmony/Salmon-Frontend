import React, { useState } from 'react';
import axios from 'axios';
import './AssignmentPage.css';
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { useNavigate } from 'react-router-dom';
import { postPDFApi } from "./constants";
import PiePagina from '../Others/PiePagina';

const barra_inferior = (
    <BarraInferior contenido={
        <>
            <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"m-calendar-page"} />
            <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"m-pagina-tutoriales"} />
            <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"m-directory"} />
            <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"m-pagina-entregables-pdf"} />
        </>
    } />
);

const menu_materias =<>

</>
const menu_mensajes =<>

</>
const menu_alertas =<>

</>
const menu_actualizaciones =<>

</>

const barra_superior = (
    <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"monitor-home"} profile_redireccion={"m-profile-page"} />
);

function MonitorAssignmentPDF() {
    const navigate = useNavigate();
    const navigateToMenu = () => {
        navigate("/m-pagina-entregables")
    }

    // State para manejar la subida de PDF
    const [file, setFile] = useState(null);
    const [matriculaClase, setMatriculaClase] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Función para manejar el cambio de archivo
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setErrorMessage('');
    };

    // Función para manejar el cambio de matrícula
    const handleMatriculaClaseChange = (event) => {
        setMatriculaClase(event.target.value);
    };

    // Función para manejar la subida de PDF
    const handleSubmitPDF = async (event) => {
        event.preventDefault();

        // Verificar que se haya seleccionado un archivo y se haya ingresado la matrícula
        if (file && matriculaClase) {
            const formData = new FormData();
            formData.append('archivo', file);
            formData.append('matricula_clase', matriculaClase);

            try {
                // Realizar la solicitud POST para subir el PDF
                const response = await axios.post(postPDFApi, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Verificar si la subida fue exitosa
                if (response.data.success) {
                    alert("Archivo subido correctamente");
                } else {
                    setErrorMessage('Error al subir archivo PDF');
                }
            } catch (error) {
                console.error('Error uploading PDF:', error);
                setErrorMessage('Error al subir archivo PDF');
            }
        } else {
            setErrorMessage('Por favor, completa todos los campos y selecciona un archivo PDF.');
        }
    };

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="folders-container">
                <div className="assignment-title">
                    <div className="button"><button onClick={navigateToMenu}>Subir Archivos</button></div>
                </div>
                <div className="assignment-holder">
                    <h2>Subir Archivo PDF</h2>
                    <form onSubmit={handleSubmitPDF}>
                        <div>
                            <label>Matrícula de Clase:</label>
                            <input type="text" value={matriculaClase} onChange={handleMatriculaClaseChange} required />
                        </div>
                        <div>
                            <label>Archivo PDF:</label>
                            <input type="file" onChange={handleFileChange} accept=".pdf" required />
                        </div>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        <button type="submit">Subir PDF</button>
                    </form>
                </div>
            </div>
            <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
            <footer>Grupo Derecho & Progreso &copy; 2024</footer>
        </div>
    );
}

export default MonitorAssignmentPDF;