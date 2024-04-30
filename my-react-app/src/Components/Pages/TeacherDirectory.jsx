import React, { useState } from 'react'
import axios from 'axios';
import './PaginaInicio.css';
import './Directories.css';
import Cabecera from '../Others/Cabecera';
import PiePagina from '../Others/PiePagina';
import BotonBarraInferior from '../Others/BotonBarraInferior';
import BarraSuperior from '../Others/BarraSuperior';
import BarraInferior from '../Others/BarraInferior';
import { getUsuarios } from "./constants";

const barra_inferior = <BarraInferior contenido={
    <>
        <BotonBarraInferior imagenSrc={require("../Assets/calendario.png")} texto={"Calendario"} redireccion={"t-calendar-page"} />
        <BotonBarraInferior imagenSrc={require("../Assets/tutoriales.png")} texto={"Tutoriales"} redireccion={"t-pagina-tutoriales"} />
        <BotonBarraInferior imagenSrc={require("../Assets/directorio.png")} texto={"Directorio"} redireccion={"t-directory"} />
        <BotonBarraInferior imagenSrc={require("../Assets/entregables.png")} texto={"Entregables"} redireccion={"t-pagina-entregables"} />
    </>
} />

const menu_materias =<>

</>
const menu_mensajes =<>

</>
const menu_alertas =<>

</>
const menu_actualizaciones =<>

</>
const barra_superior = <BarraSuperior menu_materias={menu_materias} menu_mensajes={menu_mensajes} menu_alertas={menu_alertas} menu_actualizaciones={menu_actualizaciones} redireccion={"teacher-home"} profile_redireccion={"t-profile-page"} />
export const TeacherDirectory = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleMostrarUsuariosClick = async () => {
        setLoading(true); // Indicamos que se está realizando la solicitud
        setError(null); // Reseteamos cualquier error previo

        try {
            // Realiza una solicitud GET para obtener los datos de usuarios
            const response = await axios.get(getUsuarios); // Reemplaza '/api/usuarios' con tu ruta real
            setUsers(response.data); // Actualiza el estado con los datos de usuarios recuperados

            if (response.data.length === 0) {
                setError('No hay usuarios disponibles');
            }
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            setError('Error al cargar usuarios. Inténtelo de nuevo más tarde.');
        } finally {
            setLoading(false); // Indicamos que la solicitud ha finalizado
        }
    };

    return (
        <div className='contenedor-pagina'>
            <Cabecera contenidosuperior={barra_superior} contenidoInferior={barra_inferior} />

            <div className="directory-container">
            <div className='h-title'><h1>Directorio</h1></div>
                <div className='assignment-holder'>
                    <div className="mostrar-usuarios"><button onClick={handleMostrarUsuariosClick} disabled={loading}>
                        {loading ? 'Cargando...' : 'Mostrar Usuarios'}
                    </button>
                    </div>
                    {error && <p>{error}</p>}
                    {users.length > 0 && (
                        <div>
                            <h2>Usuarios:</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Email</th>
                                        <th>Rol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.email}>
                                            <td>{user.nombre}</td>
                                            <td>{user.apellido}</td>
                                            <td>{user.email}</td>
                                            <td>{user.rol}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
                <PiePagina imagenSrc={require('../Assets/piepagina.jpg')} />
                <footer>Grupo Derecho & Progreso &copy; 2024</footer>
            </div>
        </div>
    )
}