import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useData } from './DataContext'; // Importa el contexto

import username_icon from '../Assets/username.png';
import password_icon from '../Assets/password.png';
import background_img from '../Assets/background.jpg';
import passwordEyeOpen_icon from '../Assets/showPassword.png';
import passwordEyeClosed_icon from '../Assets/noPassword.png';
import logoBackground from '../Assets/logo.jpeg';
import {apiLogin} from "./constants";

function Login() {
    const navigate = useNavigate();
    const { setData, setUserId } = useData();
    const [email, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const [errorM, setError] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(hotmail|gmail|yahoo|outlook|example)\.com$/;

    const testHandleSubmitAdmin = () => {
        navigate("/pagina-inicio");
    }

    const isLoginDisabled = email.trim() === '' || contraseña.trim() === '';
    const isShowPasswordDisabled = contraseña.trim() === '';

    const validateEmail = () => {
        if (!emailRegex.test(email)) {
            // If email format is incorrect, add 'error' class to the email input container
            document.getElementById('emailInput').classList.add('error');
        } else {
            // If email format is correct, remove 'error' class from the email input container
            document.getElementById('emailInput').classList.remove('error');
        }
    };

    const handleSubmit = async (e) => {
        validateEmail();
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
                    navigate("/admin-home");
                    break;
                case 'Maestro':
                    navigate("/admin-home");
                    break;
                case 'alumno':
                    navigate("/pagina-inicio");
                    break;
                case 'Alumno':
                    navigate("/pagina-inicio");
                    break;
                case 'admin':
                    navigate("/admin-home");
                    break;
                case 'Admin':
                    navigate("/admin-home");
                    break;
                default:
                    // Manejar caso inesperado
                    break;
            }
            // Manejar la respuesta del servidor según sea necesario
        } catch (errorM) {
            console.error('Error al iniciar sesión:', errorM);
            setError('Correo electrónico o contraseña incorrecto/s.');
            setPassword('');
        }
    };

    const togglePasswordVis = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <div className="fullpage">
            <div className='container'>
                <div className="background">
                    <img src={background_img} alt="" />
                </div>
                <div className="header">
                    {/*<div className="text">Inicio de Sesión</div>
                    <div className="underline"></div>*/}
                    <div className="logo">
                        <img src={logoBackground} alt="" />
                    </div>
                </div>
                <div className="login-text">Iniciar sesión con su correo institucional.</div>
                <div className="inputs">
                    <div className="input">
                        <div className={`input ${email && !emailRegex.test(email) ? 'error' : ''}`} id="emailInput">
                            <img src={username_icon} alt="" />
                            <input type="email" placeholder='Correo Electrónico' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type={passwordVisible ? "text" : "password"} placeholder='Contraseña' value={contraseña} onChange={(e) => setPassword(e.target.value)} />
                        <div className="show-password">
                            <button onClick={togglePasswordVis} disabled={isShowPasswordDisabled}><img src={passwordVisible ? passwordEyeOpen_icon : passwordEyeClosed_icon} alt="" /></button>
                        </div>
                    </div>
                </div>
                {/*<div className="forgot-password">¿Olvidaste tu contraseña? <span>¡Presiona aquí!</span></div>*/}
                <div className="error-message"> {errorM && <div>{errorM}</div>} </div>
                <div className="submit-container"><button onClick={handleSubmit} disabled={isLoginDisabled}>Iniciar Sesión</button></div>
                <div className="submit-container2"><button onClick={testHandleSubmitAdmin}>Admin Home</button></div>
                {/*<div className="create-account">¿Todavía no tienes una cuenta? <span>Crear cuenta</span></div>*/}
            </div>
        </div>
    )
}

export default Login;