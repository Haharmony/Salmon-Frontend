import React, {useState} from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate  } from 'react-router-dom'; // Importa el hook useHistory

//const routeInsertEstudiante ='http://172.102.0.78:3000/api/alumnos_clases/insertarAlumnoClase';
const routeInsertEstudiante ='http://192.168.1.89:3000/api/alumnos_clases/insertarAlumnoClase';
//const routeInsertEstudiante ='http://34.70.85.26:3000/api/alumnos_clases/insertarAlumnoClase';



const PaginaInsertarAlumnos =()=>{


const[matricula_alumno, setMatriculaAlumno] = useState('');
const[matricula_clase,setMatriculaClase] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();


const handleSubmitInsertAlumnos = async(e)=>{
    e.preventDefault();
    try{
        const response = await axios.post(routeInsertEstudiante,{
            matricula_alumno, 
            matricula_clase

        });
        console.log(response.data);
        alert("Alumno insertado correctamente");
    }catch(error){
        console.error('Error al insertar alumno en la clase',error);
        setError('Error al insertar alumno en la clase, por favor intentelo de nuevo');
    
    };
};
const handleRegresarButton=()=>{
    navigate("/AdminHome");
  };

  return(
<form onSubmit={handleSubmitInsertAlumnos}>
            <div>
                <h1>Insertar Alumno a Clases</h1>
            </div>
            <div>
                <label>Matricula de la clase</label>
                <input type = "text" value={matricula_clase} onChange={(e)=> setMatriculaClase(e.target.value)}></input>
            </div>
            <div>
                <label>Matricula del estudiante</label>
                <input type = "text" value={matricula_alumno} onChange={(e)=> setMatriculaAlumno(e.target.value)}></input>
            </div>
            
            <div>
            <button type="submit">Insertar Alumno</button>
            {error && <div>{error}</div>} 
            </div>
            <div> 
            <button onClick={handleRegresarButton}>Regresar Home</button>
            </div>
        </form>
  );
};
export default PaginaInsertarAlumnos;