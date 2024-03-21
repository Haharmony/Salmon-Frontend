import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';

import username_icon from '../Assets/username.png'
import password_icon from '../Assets/password.png'
import background_img from '../Assets/cat-coding.jpg'

const apiLogin = 'http://192.168.1.113:3000/api/users/login'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setPassword] = useState('');
    const [error, setError] = useState('');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(hotmail|gmail)\.com$/;

    const navigateToMenu = () => {
        window.location.href = "home-page";
    };

    const isLoginDisabled = email.trim() === '' || contraseña.trim() === '';

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
        try{
            const response = await axios.post(apiLogin, {
                email,
                contraseña
              });
              console.log(response.data);
              navigateToMenu();
              // Manejar la respuesta del servidor según sea necesario
        }catch (error) {
            console.error('Error al iniciar sesión:', error);
            setError('Correo electrónico o contraseña incorrecto/s.');
          }
    };

    return (
        <div className="fullpage">
            <div className="container">
                <div className="background">
                    <img src={background_img} alt="" />
                </div>
                <div className="header">
                    <div className="text">Inicio de Sesión</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <div className={`input ${email && !/^[a-zA-Z0-9._%+-]+@(hotmail|gmail)\.com$/.test(email) ? 'error' : ''}`} id="emailInput">
                            <img src={username_icon} alt="" />
                            <input type="email" placeholder='Correo Electrónico' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Contraseña' value={contraseña} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div className="forgot-password">¿Olvidaste tu contraseña? <span>¡Presiona aquí!</span></div>
                <div className="submit-container">
                    <button onClick={handleSubmit} disabled={isLoginDisabled}>Iniciar Sesión</button>
                    {error && <div>{error}</div>}
                </div>
                <div className="create-account">¿Todavía no tienes una cuenta? <span>Crear cuenta</span></div>
            </div>
        </div>
    )
}
