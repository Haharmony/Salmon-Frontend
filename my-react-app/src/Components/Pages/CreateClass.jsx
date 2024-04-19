import React, { useState } from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory
import './CreateClass.css'
import {routeCreateClase} from "./constants";

export const CreateClass = () => {

    const [matricula_clase, setMatriculaClase] = useState('');
    const [nombre_clase, setNombreClase] = useState('');
    const [descripcion, setDescription] = useState('');
    const [matricula_maestro, setMatriculaMaestro] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmitClass = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(routeCreateClase, {

                nombre_clase,
                descripcion,
                matricula_maestro,
                matricula_clase
            });
            console.log(response.data);
            alert("clase creada con exito");
        } catch (error) {
            console.error('Error al crear clase', error);
            setError('Error al crear clase, por favor intentelo de nuevo');
        }
    };
    const handleRegresarButton = () => {
        navigate("/admin-home");
    };
    return (
        <div className="full-page">
            <div className='container1'>
                <form onSubmit={handleSubmitClass}>
                    <div className="title"><h1>Crear Clase</h1></div>
                    <div className='class-name'>
                        <label>Nombre de la clase</label>
                        <div><input type="text" value={nombre_clase} onChange={(e) => setNombreClase(e.target.value)}></input></div>
                    </div>
                    <div className='class-description'>
                        <label>Descripción de la clase</label>
                        <div><input type="text" value={descripcion} onChange={(e) => setDescription(e.target.value)}></input></div>
                    </div>
                    <div className='teacher-id'>
                        <label>Matricula Maestro</label>
                        <div><input type="text" value={matricula_maestro} onChange={(e) => setMatriculaMaestro(e.target.value)}></input></div>
                    </div>
                    <div className='class-id'>
                        <label>Matricula de la clase</label>
                        <div><input type="text" value={matricula_clase} onChange={(e) => setMatriculaClase(e.target.value)}></input></div>
                    </div>
                    <div className='submit'>
                        <button type="submit">Crear Clase</button>
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