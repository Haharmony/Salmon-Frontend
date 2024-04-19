import React, { useState } from 'react'
import axios from 'axios';
import './AssignmentPage.css';
import Cabecera from '../Others/Cabecera';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { BotonMenuDesplegable } from '../Others/BotonMenuDesplegable';
import { useNavigate } from 'react-router-dom';
import {postPDFApi} from "./constants";

const barra_inferior = (
    <BarraInferior contenido={
        <>
            <BotonBarraInferior imagenSrc={require("../Assets/noticias.png")} texto={"Noticias"} redireccion={"a-pagina-noticias"} />
            <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"20/23/2004"} redireccion={"calendar-page"} />
            <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"a-pagina-tutoriales"} />
            <BotonBarraInferior imagenSrc={require("../Assets/bancorecursos.png")} texto={"Banco de recursos"} redireccion={"a-pagina-bancoRecursos"} />
            <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"directory"} />
            <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"pagina-entregables"} />
        </>
    } />
);

const menu_materias = (
    <>
        <BotonMenuDesplegable texto={'Materia 1'} redireccion={'/a-pagina-tablon'} />
        <BotonMenuDesplegable texto={'Materia 2'} redireccion={'/a-pagina-tablon'} />
        <BotonMenuDesplegable texto={'Materia 3'} redireccion={'/a-pagina-tablon'} />
    </>
);
const menu_mensajes = (
    <>
        <BotonMenuDesplegable texto={'Mensaje 1'} />
        <BotonMenuDesplegable texto={'Mensaje 2'} />
        <BotonMenuDesplegable texto={'Mensaje 3'} />
    </>
);
const menu_alertas = (
    <>
        <BotonMenuDesplegable texto={'Alerta 1'} />
        <BotonMenuDesplegable texto={'Alerta 2'} />
        <BotonMenuDesplegable texto={'Alerta 3'} />
    </>
);
const menu_actualizaciones = (
    <>
        <BotonMenuDesplegable texto={'Actualizacion 1'} />
        <BotonMenuDesplegable texto={'Actualizacion 2'} />
        <BotonMenuDesplegable texto={'Actualizacion 3'} />
    </>
);

const barra_superior = (
    <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"admin-home"} profile_redireccion={"a-profile-page"} />
);

function AssignmentPagePDF() {
    const navigate = useNavigate();
    const navigateToMenu = () => {
      navigate("/pagina-entregables")
    }
    const [selectedFile, setSelectedFile] = useState(null);
    const [nombreArchivo, setNombreArchivo] = useState('');
    const [matriculaClase, setMatriculaClase] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === 'application/pdf') {
            setSelectedFile(file);
            setErrorMessage('');
        } else {
            setSelectedFile(null);
            setErrorMessage('Por favor, selecciona un archivo PDF.');
        }
    };

    const handleSubmitPDF = (event) => {
        event.preventDefault();
        if (selectedFile && nombreArchivo && matriculaClase) {
            const formData = new FormData();
            formData.append('pdf', selectedFile);
            formData.append('nombre_archivo', nombreArchivo);
            formData.append('matricula_clase', matriculaClase);

            // Enviar la solicitud POST utilizando Axios
            axios.post(postPDFApi, formData)
                .then(response => {
                    // Manejo de la respuesta exitosa
                    console.log('Archivo subido exitosamente:', response.data);
                    alert("Archivo subido correctamente");
                })
                .catch(error => {
                    // Manejo de errores
                    console.error('Error al subir el archivo:', error);
                });
        } else {
            setErrorMessage('Por favor, completa todos los campos y selecciona un archivo PDF.');
        }
    };

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />
            <div className="folders-container">
                <div className="assignment-title">
                    <div className="button"><button onClick={navigateToMenu}>General Uploader</button></div>
                </div>
                <div className="assignment-holder">
                    <h2>Subir Archivo PDF</h2>
                    <form onSubmit={handleSubmitPDF}>
                        <div>
                            <label>Nombre del Archivo:</label>
                            <input type="text" value={nombreArchivo} onChange={(e) => setNombreArchivo(e.target.value)} />
                        </div>
                        <div>
                            <label>Matrícula de Clase:</label>
                            <input type="text" value={matriculaClase} onChange={(e) => setMatriculaClase(e.target.value)} />
                        </div>
                        <div>
                            <label>Archivo PDF:</label>
                            <input type="file" accept=".pdf" onChange={handleFileChange} />
                        </div>
                        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                        <button type="submit">Subir PDF</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AssignmentPagePDF;