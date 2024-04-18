import React, {useState} from 'react';
import axios from 'axios'; //Libreria necesaria npm i axios
import { useNavigate  } from 'react-router-dom'; // Importa el hook useHistory

//const routeCreateLink ='http://172.102.0.78:3000/api/zoom/generarLink'; //por ver
const routeCreateLink ='http://192.168.1.89:3000/api/zoom/generarLink'; //por ver
//const routeCreateLink ='http://34.70.85.26:3000/api/zoom/generarLink'; //por ver


const PaginaLinkZoom = ()=>{

    const[matricula_clase, setMatriculaClase] = useState('');
    const[url, setUrl] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmitLink= async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(routeCreateLink,{
                url,
                matricula_clase
            });console.log(response.data);
            alert("Link creado con exito :)");
        }catch(error){
            console.error('Error al crear link',error);
            setError('Error al crear link, por favor intentelo de nuevo');
        }
    };
    const handleRegresarButton=()=>{
        navigate("/AdminHome");
      };
      return(
        <form onSubmit={handleSubmitLink}>
                    <div>
                        <h1>Insertar Links Para la clase</h1>
                    </div>
                    <div>
                        <label>Matricula de la clase</label>
                        <input type = "text" value={matricula_clase} onChange={(e)=> setMatriculaClase(e.target.value)}></input>
                    </div>
                    <div>
                        <label>URL de Zoom</label>
                        <input type = "text" value={url} onChange={(e)=> setUrl(e.target.value)}></input>
                    </div>
                    
                    <div>
                    <button type="submit">Insertar Link</button>
                    {error && <div>{error}</div>} 
                    </div>
                    <div> 
                    <button onClick={handleRegresarButton}>Regresar Home</button>
                    </div>
                </form>
          );
};
export default PaginaLinkZoom;