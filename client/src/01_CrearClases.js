import React, {useState} from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate  } from 'react-router-dom'; // Importa el hook useHistory

//const routeCreateClase ='http://172.102.0.78:3000/api/clases/createClaseMaestro';
const routeCreateClase ='http://192.168.1.89:3000/api/clases/createClaseMaestro';
//const routeCreateClase ='http://34.70.85.26:3000/api/clases/createClaseMaestro';


const PaginaCrearClases = ()=>{

const[matricula_clase, setMatriculaClase] = useState('');
const[nombre_clase, setNombreClase] = useState('');
const[descripcion, setDescription] = useState('');
const[matricula_maestro, setMatriculaMaestro] = useState('');

const [error, setError] = useState('');
const navigate = useNavigate();

const handleSubmitClass = async (e) =>{
    e.preventDefault();
    try{
        const response = await axios.post(routeCreateClase,{
            
            nombre_clase, 
            descripcion, 
            matricula_maestro,
            matricula_clase
        });
        console.log(response.data);
        alert("clase creada con exito");
    }catch(error){
        console.error('Error al crear clase',error);
        setError('Error al crear clase, por favor intentelo de nuevo');
    }
};
const handleRegresarButton=()=>{
    navigate("/AdminHome");
  };
    return(
        <form onSubmit={handleSubmitClass}>
            <div>
                <h1>Crear clases</h1>
            </div>
            
            <div>
                <label>Nombre de la clase</label>
                <input type = "text" value={nombre_clase} onChange={(e)=> setNombreClase(e.target.value)}></input>
            </div>
            <div>
                <label>Descripción de la clase</label>
                <input type = "text" value={descripcion} onChange={(e)=> setDescription(e.target.value)}></input>
            </div>
            <div>
                <label>Matricula Maestro</label>
                <input type = "text" value={matricula_maestro} onChange={(e)=> setMatriculaMaestro(e.target.value)}></input>
            </div>
            <div>
                <label>Matricula de la clase</label>
                <input type = "text" value={matricula_clase} onChange={(e)=> setMatriculaClase(e.target.value)}></input>
            </div>
            <div>
            <button type="submit">Crear Clase</button>
            {error && <div>{error}</div>} 
            </div>
            <div> 
            <button onClick={handleRegresarButton}>Regresar Home</button>
            </div>
        </form>
    );
};
export default PaginaCrearClases;