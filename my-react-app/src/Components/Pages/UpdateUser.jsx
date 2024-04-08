import React, { useState } from "react";
import axios from "axios";
import './UpdateUser.css'

const routeFindUserByRol = 'http://192.168.1.89:3000/api/users/findByRole';
const routeUpdateUser = 'http://192.168.1.89:3000/api/users/update';

export const UpdateUser = () => {

    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los datos de usuarios
    const [showTable, setShowTable] = useState(false);
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [imagen, setImagen] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [id, setId] = useState(0);

    const [editar, setEditar] = useState(false);


    const handleActualizarUsuarios = async (rolSeleccionado) => {

        try {
            const response = await axios.get(routeFindUserByRol, {
                params: {
                    rol: rolSeleccionado
                }
            }); // Utilizar axios.get en lugar de fetch
            setShowTable(!showTable);
            setUsuarios(response.data.data); // Guardar los datos recibidos en el estado usuarios
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleRegresarButton = () => {
        window.location.href = "home-page"
    };

    const editarEmpleados = (val) => {
        setEditar(true);
        setEmail(val.email);
        setNombre(val.nombre);
        setApellido(val.apellido);
        setImagen(val.imagen);
        setMatricula(val.matricula);
        setTelefono(val.telefono);
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
                matricula: matricula
            });
            alert("usuario actualizado");
            setShowTable(!showTable);
        } catch (error) {
            console.error('Error actualizando usuario:', error);
        }
    };

    return (
        <div className="container2">
            <div className="title-uu"><h1>Actualización de datos de usuarios</h1></div>
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
            <div className="id-field-uu">
                <label>Matri­cula:</label>
                <div className="id-field-uu-input"><input type="text" value={matricula} onChange={e => setMatricula(e.target.value)} /></div>
            </div>
            <div className="return-home-uu">
                <button onClick={handleRegresarButton}>Regresar Home</button>
            </div>
            {editar ? (
                <div className="update-button">
                    <button onClick={update}>Actualizar</button>
                </div>
            ) : null}



            {/* Tabla para mostrar los datos de los usuarios */}
            {showTable ? (
                <div>
                    <h2>Usuarios:</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Telefono</th>
                                <th>Imagen</th>
                                <th>Matricula</th>

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
                                    <td>{usuario.matricula}</td>


                                    <td>
                                        <button onClick={() => { editarEmpleados(usuario); }}>Editar</button>
                                        <button>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : null}
        </div>
    );
};