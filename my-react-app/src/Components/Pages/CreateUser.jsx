import React, { useState } from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios// Importa el hook useHistory
import './CreateUser.css'
import { useNavigate } from 'react-router-dom';

const routeCreateUser = 'http://192.168.1.89:3000/api/users/create';

export const CreateUser = () => {
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [rol, setRol] = useState('');
    const [matricula, setMatricula] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(routeCreateUser, {
                email,
                nombre,
                apellido,
                telefono,
                contraseña,
                rol,
                matricula
            });
            console.log(response.data);
            alert("Usuario registrado");
        } catch (error) {
            console.error('Error al crear usuario', error);
            setError('Error al crear usuario, por favor intentelo de nuevo.');
        }
    };
    const handleRegresarButton=()=>{
        navigate("/admin-home");
      };
    return (
        <form onSubmit={handleSubmit}>
            <div className="full-page">
                <div className='container1'>
                    <div className='title'><h1>CREAR USUARIO</h1></div>
                    <div className="underline1"></div>
                    <div className='email-field'>
                        <label>Email</label>
                        <div className="email-input"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                    </div>
                    <div className='name-field'>
                        <label>Nombre</label>
                        <div className="name-input"><input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /></div>
                    </div>
                    <div className='lastname-field'>
                        <label>Apellido</label>
                        <div className="lastname-input"><input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} /></div>
                    </div>
                    <div className='phone-number'>
                        <label>Telefono</label>
                        <div className="phone-number-input"><input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} /></div>
                    </div>
                    <div className='password-field'>
                        <label>Contraseña</label>
                        <div className="password-input"><input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} /></div>
                    </div>
                    <div className='role-field'>
                        <label>Rol</label>
                        <div className="role-input"><input type="text" value={rol} onChange={(e) => setRol(e.target.value)} /></div>
                    </div>
                    <div className='id-field'>
                        <label>Matricula</label>
                        <div className="id-input"><input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} /></div>
                    </div>
                    <div className="create-user">
                        <div className="error-message1">{error && <div>{error}</div>}</div>
                        <button type="submit">Crear usuario</button>
                    </div>
                    <div className="underline2"></div>
                    <div className='return-home'>
                        <span onClick={handleRegresarButton}>Regresar Home</span>
                    </div>
                </div>
            </div>
        </form>
    );
}