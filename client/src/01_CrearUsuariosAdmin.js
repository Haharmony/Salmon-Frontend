import React, { useState } from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory

const routeCreateUser = 'http://192.168.1.89:3000/api/users/create';
//const routeCreateUser = 'http://172.102.0.78:3000/api/users/create';
//const routeCreateUser = 'http://34.70.85.26:3000/api/users/create';



function CreateUsuarios() {
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
      setError('Error al crear usuario, por favor intentelo de nuevo');
      alert("Error al crear usuario");
    }
  };
  const handleRegresarButton = () => {
    navigate("/AdminHome");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Crear Usuario nuevo</h1>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label>Apellido:</label>
        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      </div>
      <div>
        <label>Telefono:</label>
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </div>
      <div>
        <label>Contraseña:</label>
        <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} />
      </div>
      <div>
        <label>Rol:</label>
        <input type="text" value={rol} onChange={(e) => setRol(e.target.value)} />
      </div>
      <div>
        <label>Matricula:</label>
        <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
      </div>
      <div></div>
      <button type="submit">Crear usuario</button>
      {error && <div>{error}</div>}
      <div>
        <button onClick={handleRegresarButton}>Regresar Home</button>
      </div>
    </form>


  );
}

export default CreateUsuarios;