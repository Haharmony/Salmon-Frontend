import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory

const PaginaInicioAdmin = () => {
    const navigation = useNavigate();

    const handleCrearUsuariosButton = () => {
        navigation("/01_CrearUsuariosAdmin");
    };
    const handleActualizarUsuariosButton = () => {
        navigation("/01_ActualizarUsuarios");
    };
    const handleCrearClase = () => {
        navigation("/01_CrearClases");
    };
    const handleInsertarAlumno = () => {
        navigation("/01_AsignarClases");
    };
    const handleInsertarLink = () => {
        navigation("/01_ZoomLink");
    };

    const handleDescargarExcel = () => {
        navigation("/01_TablaArchivoExcel");
    };
    const handleSubirExcel = () => {
        navigation("/01_FormularioSubirExcel");
    };
    return (
        <form>
            <div>
                <button onClick={handleCrearUsuariosButton}>Crear Usuarios</button>
            </div>
            <div>
                <button onClick={handleActualizarUsuariosButton}>Actualizar Usuarios</button>
            </div>
            <div>
                <button onClick={handleCrearClase}>Crear Clase</button>
            </div>
            <div>
                <button onClick={handleInsertarAlumno}>Insertar Alumnos a Materias</button>

            </div>
            <div>
                <button onClick={handleInsertarLink}>Insertar link zoom a Materias</button>

            </div>
            <div>
                <button onClick={handleSubirExcel}>Subir de excel</button>

            </div>
            <div>
                <button onClick={handleDescargarExcel}>Ver tabla de excel</button>

            </div>
        </form>
    );

};
export default PaginaInicioAdmin;