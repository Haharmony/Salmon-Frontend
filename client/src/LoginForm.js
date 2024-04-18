import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import { useData } from './DataContext'; // Importa el contexto

const apiLogin = 'http://192.168.1.89:3000/api/users/login'; 
//const apiLogin = 'http://172.102.0.78:3000/api/users/login'; //SCHOOL
//const apiLogin = 'http://34.70.85.26:3000/api/users/login'; 



function LoginForm() {
    const navigate = useNavigate(); 
    const { setData, setUserId } = useData(); // Obtén las funciones para establecer los datos desde el contexto
    const [email, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(apiLogin, {
                email,
                contraseña
            });
            console.log(response.data);
            console.log('Exito al validar usuario log in');

            const userData = response.data.data; // Obtén los datos del usuario desde la respuesta
            console.log("Datos del usuario:", userData);
            
            // Guarda los datos del usuario en el contexto
            setData(userData);
            console.log("Datos guardados en el contexto:", userData);

            const userId = userData.id;
            console.log("ID del usuario:", userId);
            // Guarda el ID del usuario en el contexto
            setUserId(userId);
            console.log("ID del usuario guardado en el contexto:", userId);
            console.log("su Matricula del usuario guardado en el contexto:", userData.matricula);
            const userType = userData.rol;
            console.log("el rol es..: " + userType);

            switch (userType) {
                case 'maestro':
                  navigate("/02_MaestroHome");
                  break;
                case 'Maestro':
                    navigate("/02_MaestroHome");
                    break;
                case 'alumno':
                  navigate("/03_EstudianteHome");
                    break;
                case 'Alumno':
                    navigate("/03_EstudianteHome");
                    break;
                case 'admin':
                  navigate("/01_AdminHome");
                  break;
                case 'Admin':
                    navigate("/01_AdminHome");
                    break;
                default:
                    // Manejar caso inesperado
                    break;
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Bienvenidos LOGIN</h1>
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" value={contraseña} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Iniciar sesión</button>
            {error && <div>{error}</div>}
        </form>
    );
}

export default LoginForm;
