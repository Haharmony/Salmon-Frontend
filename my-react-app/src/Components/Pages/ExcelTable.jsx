import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {apiMostrarExcel,apiDescargarExcel,apiEliminarExcel} from "./constants";



export const ExcelTable = () => {
    const [archivos, setArchivos] = useState([]);
    const [error, setError] = useState('');
    const [matricula, setMatricula] = useState('');

    const navigate = useNavigate();

    const handleMostrarArchivos = async () => {
        try {
            const response = await axios.get(apiMostrarExcel);
            setArchivos(response.data.data);
        } catch (error) {
            setError('Error al cargar archivos');
            console.error('Error al cargar archivos:', error);
        }
    };

    const handleDescargarArchivo = async (idArchivo) => {
        try {
            const response = await axios.get(`${apiDescargarExcel}?idArchivo=${idArchivo}`, { responseType: 'blob' });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${idArchivo}.xlsx`);
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error('Error al descargar el archivo:', error);
        }
    };

    const handleEliminarArchivo = async (idArchivo) => {
        try {
            await axios.delete(`${apiEliminarExcel}?idArchivo=${idArchivo}`);
            console.log('Archivo eliminado exitosamente.');
            alert("Excel eliminado correctamente");
            handleMostrarArchivos();
            // Puedes agregar aquí una lógica adicional después de eliminar el archivo, como actualizar la lista de archivos.
        } catch (error) {
            console.error('Error al eliminar el archivo:', error);
        }

    };

    const handleRegresarButton = () => {
        navigate("/admin-home");
    };

    return (
        <div className='full-page'>
            <div className="container1">
                <div>
                    <input
                        type="text"
                        placeholder="Ingrese matrícula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                    <button onClick={handleMostrarArchivos}>Mostrar Archivos</button>
                </div>
                {error && <p>{error}</p>}
                <table>
                    <thead>
                        <tr>
                            <th>Nombre de archivo</th>
                            <th>Matrícula del administrador</th>
                            <th>Fecha y hora de subida</th>
                            <th>Descargar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {archivos.map((archivo, index) => (
                            <tr key={index}>
                                <td>{archivo.nombre_archivo}</td>
                                <td>{archivo.matricula_admin}</td>
                                <td>{archivo.fecha_hora_subida}</td>
                                <td>
                                    <button onClick={() => handleDescargarArchivo(archivo.id)}>Descargar</button>
                                </td>
                                <td>
                                    <button onClick={() => handleEliminarArchivo(archivo.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="underline2"></div>
                <div className='return-home'>
                    <span onClick={handleRegresarButton}>Regresar Home</span>
                </div>
            </div>
        </div>
    );
};
