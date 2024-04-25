import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {apiSubirExcel} from "./constants";

export const UploadExcel = () => {
    const [archivo, setArchivo] = useState(null);
    //const [nombreArchivo, setNombreArchivo] = useState('');
    const [matriculaAdmin, setMatriculaAdmin] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleArchivoChange = (event) => {
        setArchivo(event.target.files[0]);
    };

    const handleMatriculaAdminChange = (e) => {
        setMatriculaAdmin(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('archivo', archivo);
            formData.append('matricula_admin', matriculaAdmin);
            const response = await axios.post(apiSubirExcel, formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            if (response.data.success) {
              setMessage('Archivo Excel subido exitosamente');
              // Realizar acciones adicionales después de subir el archivo
            } else {
              setMessage('Hubo un error al subir el archivo Excel');
            }
          } catch (error) {
            console.error('Error uploading Excel file:', error);
            setMessage('Hubo un error al subir el archivo Excel');
          }
    };

    const handleRegresarButton = () => {
        navigate("/admin-home");
    };

    return (
        <div className='full-page'>
            <div className="container1">
                <h2>Subir Archivo Excel</h2>
                {message && <p>{message}</p>}
                <form onSubmit={handleSubmit}>
                    {/*<div>
          <label htmlFor="nombreArchivo">Nombre del Archivo:</label>
          <input
            type="text"
            id="nombreArchivo"
            value={nombreArchivo}
            onChange={(e) => setNombreArchivo(e.target.value)}
          />
        </div>*/}
                    <div>
                        <label htmlFor="matriculaAdmin">Matrícula del Administrador:</label>
                        <input
                            type="text"
                            id="matriculaAdmin"
                            value={matriculaAdmin}
                            onChange={handleMatriculaAdminChange} required
                        />
                    </div>
                    <div>
                        <label htmlFor="archivo">Selecciona un archivo Excel:</label>
                        <input
                            type="file"
                            id="archivo"
                            name="archivo" // Nombre del campo de archivo necesario para el servidor
                            accept=".xlsx, .xls"
                            onChange={handleArchivoChange} required
                        />
                    </div>
                    <button type="submit">Subir Archivo</button>
                </form>
                <div className="underline2"></div>
                    <div className='return-home'>
                        <span onClick={handleRegresarButton}>Regresar Home</span>
                    </div>
            </div>
        </div>
    );
};
