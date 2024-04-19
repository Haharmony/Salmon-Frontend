import React, { useState } from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory
import {routeInsertEstudiante} from "./constants";




export const AssignClass = () => {


    const [matricula_alumno, setMatriculaAlumno] = useState('');
    const [matricula_clase, setMatriculaClase] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmitInsertAlumnos = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(routeInsertEstudiante, {
                matricula_alumno,
                matricula_clase

            });
            console.log(response.data);
            alert("Alumno insertado correctamente");
        } catch (error) {
            console.error('Error al insertar alumno en la clase', error);
            setError('Error al insertar alumno en la clase, por favor intentelo de nuevo');

        };
    };
    const handleRegresarButton = () => {
        navigate("/admin-home");
    };

    return (
        <div className="full-page">
            <div className="container1">
                <form onSubmit={handleSubmitInsertAlumnos}>

                    <div className='title'>
                        <h1>Insertar Alumno a Clase</h1>
                    </div>
                    <div className='class-id'>
                        <label>Matricula de la clase</label>
                        <div><input type="text" value={matricula_clase} onChange={(e) => setMatriculaClase(e.target.value)}></input></div>
                    </div>
                    <div className='student-id'>
                        <label>Matricula del estudiante</label>
                        <div><input type="text" value={matricula_alumno} onChange={(e) => setMatriculaAlumno(e.target.value)}></input></div>
                    </div>

                    <div className='submit'>
                        <button type="submit">Insertar Alumno</button>
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