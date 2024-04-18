import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const routeFindUserByRol = 'http://192.168.1.89:3000/api/users/findByRole';
const routeUpdateUser = 'http://192.168.1.89:3000/api/users/update';
//const routeFindUserByRol = 'http://172.102.0.78:3000/api/users/findByRole';
//const routeUpdateUser = 'http://172.102.0.78:3000/api/users/update';
//const routeFindUserByRol = 'http://34.70.85.26:3000/api/users/findByRole';
//const routeUpdateUser = 'http://34.70.85.26:3000/api/users/update';



const PaginaActualizarUsuarios = () => {
  
    const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los datos de usuarios
    const [showTable, setShowTable] = useState(false);
    const [email, setEmail] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [imagen, setImagen] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [matricula, setMatricula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [tiene_certificado,setTieneCertificado]=useState(false);
    const [id, setId] = useState(0);
    const navigate = useNavigate();

   const[editar, setEditar] = useState(false);

    
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
        navigate("/AdminHome");
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
        <div>
            <h1>Pagina para Actualizar datos de usuario</h1>
            <div>
                <button onClick={() => handleActualizarUsuarios('maestro')}>Actualizar Maestros</button>
            </div>
            <div>
            <button onClick={() => handleActualizarUsuarios('alumno')}>Actualizar Estudiantes</button>
            </div>
            <div>
                <button onClick={handleRegresarButton}>Regresar Home</button>
            </div>
         {/* Campos de entrada para datos de usuario */}
         <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div>
                <label>Apellido:</label>
                <input type="text" value={apellido} onChange={e => setApellido(e.target.value)} />
            </div>
            <div>
                <label>Telefono:</label>
                <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} />
            </div>
            <div>
                <label>Imagen:</label>
                <input type="text" value={imagen} onChange={e => setImagen(e.target.value)} />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="text" value={contraseña} onChange={e => setContraseña(e.target.value)} />
            </div>
            <div>
                <label>Matrícula:</label>
                <input type="text" value={matricula} onChange={e => setMatricula(e.target.value)} />
            </div>
            <div>
                <label>Certificado:</label>
                <input type="bool" value={tiene_certificado} onChange={e => setTieneCertificado(e.target.value)} />
            </div>
            {editar?(
                 <div>
                 <button onClick={update}>Actualizar</button>
                 </div>
            ):null}
               
            
            
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
                                    <button onClick={()=>{editarEmpleados(usuario);}}>Editar</button>
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

export default PaginaActualizarUsuarios;