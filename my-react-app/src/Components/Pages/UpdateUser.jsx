import React, { useState } from "react";
import axios from "axios";
import './UpdateUser.css'
import './Directories.css';
import { useNavigate } from "react-router-dom";
import { routeFindUserByRol, routeUpdateUser } from "./constants";

export const UpdateUser = () => {

    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los datos de usuarios
    const [showTable, setShowTable] = useState(false);
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [imagen, setImagen] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tiene_certificado, setTieneCertificado] = useState(false);
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    const [editar, setEditar] = useState(false);


    const handleActualizarUsuarios = async (rolSeleccionado) => {

        try {
            const response = await axios.get(`${routeFindUserByRol}?role=${rolSeleccionado}`);
            setShowTable(!showTable);
            setUsuarios(response.data); // Guardar los datos recibidos en el estado usuarios
        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleRegresarButton = () => {
        navigate("/admin-home");
    };

    const editarEmpleados = (val) => {
        setEditar(true);
        setEmail(val.email);
        setNombre(val.nombre);
        setApellido(val.apellido);
        setImagen(val.imagen);
        setMatricula(val.matricula);
        setContraseña(val.contraseña);
        setTelefono(val.telefono);
        setTieneCertificado(val.tiene_certificado);
        setId(val.id);
    };

    const update = async () => {
        try {
            const response = await axios.put(routeUpdateUser, {
                id: id,
                email: email,
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                imagen: imagen,
                contraseña: contraseña,
                matricula: matricula,
                tiene_certificado: tiene_certificado
            });
            alert("usuario actualizado");
            setShowTable(!showTable);
            console.log(response);
        } catch (error) {
            console.error('Error actualizando usuario:', error);
        }
    };

    return (
        <div className="full-page">
            <div className="container1">
                <div className="title-uu"><h1>Actualización de Datos de Usuario</h1></div>
                <div className="update-teachers">
                    <button onClick={() => handleActualizarUsuarios('maestro')}>Actualizar Maestros</button>
                </div>
                <div className="update-students">
                    <button onClick={() => handleActualizarUsuarios('alumno')}>Actualizar Estudiantes</button>
                </div>
                {/* Campos de entrada para datos de usuario */}
                <div className="email-field-uu">
                    <label>Email:</label>
                    <div className="email-field-uu-input"><input type="text" value={email} onChange={e => setEmail(e.target.value)} /></div>
                </div>
                <div className="name-field-uu">
                    <label>Nombre:</label>
                    <div className="name-field-uu-input"><input type="text" value={nombre} onChange={e => setNombre(e.target.value)} /></div>
                </div>
                <div className="lastname-field-uu">
                    <label>Apellido:</label>
                    <div className="lastname-field-uu-input"><input type="text" value={apellido} onChange={e => setApellido(e.target.value)} /></div>
                </div>
                <div className="phone-number-uu">
                    <label>Telefono:</label>
                    <div className="phone-number-uu-input"><input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} /></div>
                </div>
                <div className="img-uu">
                    <label>Imagen:</label>
                    <div className="img-uu-input"><input type="text" value={imagen} onChange={e => setImagen(e.target.value)} /></div>
                </div>
                <div className="password-uu">
                    <label>Contraseña:</label>
                    <div className="password-uu-input"><input type="text" value={contraseña} onChange={e => setContraseña(e.target.value)} /></div>
                </div>
                <div className="id-field-uu">
                    <label>Matri­cula:</label>
                    <div className="id-field-uu-input"><input type="text" value={matricula} onChange={e => setMatricula(e.target.value)} /></div>
                </div>
                <div className="cert-field-uu">
                    <label>Certificado:</label>
                    <div className="cert-field-uu-input"><input type="bool" value={tiene_certificado} onChange={e => setTieneCertificado(e.target.value)} /></div>
                </div>
                <div className="underline2"></div>
                <table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Imagen</th>
                            <th>Contraseña</th>
                            <th>Matricula</th>
                            <th>Certificado</th>

                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuario => (
                            <tr key={usuario.email}>
                                <td>{usuario.email}</td>
                                <td>{usuario.nombre}</td>
                                <td>{usuario.apellido}</td>
                                <td>{usuario.telefono}</td>
                                <td><img src={usuario.imagen} alt="Imagen de perfil" /></td>
                                <td>{usuario.contraseña}</td>
                                <td>{usuario.matricula}</td>
                                <td>{usuario.tiene_certificado}</td>

                                <td>
                                    <button onClick={() => { editarEmpleados(usuario); }}>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="return-home-uu">
                    <span onClick={handleRegresarButton}>Regresar Home</span>
                </div>
                {editar ? (
                    <div className="update-button">
                        <button onClick={update}>Actualizar</button>
                    </div>
                ) : null}

            </div>
        </div>
    );
};