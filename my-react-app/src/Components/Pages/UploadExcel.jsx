import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {apiSubirExcel} from "./constants";

export const UploadExcel = () => {
    const [archivo, setArchivo] = useState(null);
    //const [nombreArchivo, setNombreArchivo] = useState('');
    const [matriculaAdmin, setMatriculaAdmin] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleArchivoChange = (event) => {
        setArchivo(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!archivo || !matriculaAdmin) {
            setError('Por favor completa todos los campos.');
            return;
        }

        const formData = new FormData();
        formData.append('excelFile', archivo);
        //formData.append('nombreArchivo', nombreArchivo);
        formData.append('matricula_admin', matriculaAdmin);

        try {
            await axios.post(apiSubirExcel, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Archivo Excel subido exitosamente.');
            alert("exito");
            // Puedes agregar aquí una lógica adicional después de subir el archivo, como actualizar la lista de archivos.
        } catch (error) {
            setError('Error al subir el archivo Excel.');
            console.error('Error al subir el archivo Excel:', error);
        }
    };

    const handleRegresarButton = () => {
        navigate("/admin-home");
    };

    return (
        <div className='full-page'>
            <div className="container1">
                <h2>Subir Archivo Excel</h2>
                {error && <p>{error}</p>}
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
                            onChange={(e) => setMatriculaAdmin(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="archivo">Selecciona un archivo Excel:</label>
                        <input
                            type="file"
                            id="archivo"
                            name="archivo" // Nombre del campo de archivo necesario para el servidor
                            accept=".xlsx, .xls"
                            onChange={handleArchivoChange}
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
