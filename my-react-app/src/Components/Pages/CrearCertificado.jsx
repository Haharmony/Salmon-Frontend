import React, { useState } from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory
import './CreateClass.css'
import {subirCertificado} from "./constants";

export const CrearCertificado = () => {
    const navigate = useNavigate();
    const handleRegresarButton = () => {
        navigate("/admin-home");
    };

    // State para manejar la subida de PDF
    const [file, setFile] = useState(null);
    const [matricula_alumno, setMatriculaAlumno] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Función para manejar el cambio de archivo
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setErrorMessage('');
    };

    // Función para manejar el cambio de matrícula
    const handleMatriculaClaseChange = (event) => {
        setMatriculaAlumno(event.target.value);
    };

    // Función para manejar la subida de PDF
    const handleSubmitPDF = async (event) => {
        event.preventDefault();

        // Verificar que se haya seleccionado un archivo y se haya ingresado la matrícula
        if (file && matricula_alumno) {
            const formData = new FormData();
            formData.append('archivo', file);
            formData.append('matricula_alumno', matricula_alumno);

            try {
                // Realizar la solicitud POST para subir el PDF
                const response = await axios.post(subirCertificado, formData, {
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
        <div className="full-page">
            <div className='container1'>
                <form onSubmit={handleSubmitPDF}>
                    <div className="title"><h1>Subir Constancia</h1></div>
                    <div className='class-name'>
                        <label>Matricula del Alumno</label>
                        <div><input type="text" value={matricula_alumno} onChange={handleMatriculaClaseChange} required ></input></div>
                    </div>
                    <div className='class-description'>
                        <label>Archivo PDF</label>
                        <div><input type="file" onChange={handleFileChange} accept=".pdf" required ></input></div>
                    </div>
                    <div className='submit'>
                        <button type="submit">Subir PDF</button>
                        {errorMessage && <div>{errorMessage}</div>}
                    </div>
                    <div className="underline2"></div>
                </form>
                <div className='return-home'>
                    <span onClick={handleRegresarButton}>Regresar Home</span>
                </div>
            </div>
        </div>
    );
};