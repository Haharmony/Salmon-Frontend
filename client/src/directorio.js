import React, { useState } from 'react';
import axios from 'axios';

//const getUsuarios = 'http://192.168.1.89:3000/api/users/directory';
//const getUsuarios = 'http://172.102.0.78:3000/api/users/directory'; //SCHOOL
const getUsuarios = 'https://haharmony.github.io/Salmon-Frontend/api/users/directory';


const DirectorioPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleMostrarUsuariosClick = async () => {
    setLoading(true); // Indicamos que se está realizando la solicitud
    setError(null); // Reseteamos cualquier error previo

    try {
      // Realiza una solicitud GET para obtener los datos de usuarios
      const response = await axios.get(getUsuarios); // Reemplaza '/api/usuarios' con tu ruta real
      setUsers(response.data.data); // Actualiza el estado con los datos de usuarios recuperados

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
    <div>
      <h1>Directorio</h1>
      <button onClick={handleMostrarUsuariosClick} disabled={loading}>
        {loading ? 'Cargando...' : 'Mostrar Usuarios'}
      </button>
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
  );
};

export default DirectorioPage;