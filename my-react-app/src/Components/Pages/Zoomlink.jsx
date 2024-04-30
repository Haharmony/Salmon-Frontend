import React, { useState } from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory
import {routeCreateLink} from "./constants";


export const ZoomLink = () => {

    const [matricula_clase, setMatriculaClase] = useState('');
    const [url, setUrl] = useState('');
    const [fecha, setFecha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmitLink = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(routeCreateLink, {
                url,
                matricula_clase,
                fecha
            }); console.log(response.data);
            alert("Link creado con exito :)");
        } catch (error) {
            console.error('Error al crear link', error);
            setError('Error al crear link, por favor intentelo de nuevo');
        }
    };
    const handleRegresarButton = () => {
        navigate("/admin-home");
    };
    return (<div className="full-page">
        <div className="container1">
            <form onSubmit={handleSubmitLink}>

                <div className='title'>
                    <h1>Insertar Links Para la Clase</h1>
                </div>
                <div className='class-id'>
                    <label>Matricula de la clase</label>
                    <div><input type="text" value={matricula_clase} onChange={(e) => setMatriculaClase(e.target.value)}></input></div>
                </div>
                <div className='zoom-url-a'>
                    <label>URL de Zoom</label>
                    <div><input type="text" value={url} onChange={(e) => setUrl(e.target.value)}></input></div>
                </div>
                <div className='insertar-fecha'>
                    <label>Fecha</label>
                    <div><input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)}></input></div>
                </div>
                <div className='submit'>
                    <button type="submit">Insertar Link</button>
                    {error && <div>{error}</div>}
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