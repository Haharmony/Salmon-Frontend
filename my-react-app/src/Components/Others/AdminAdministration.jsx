import React from 'react';
import './AdminAdministration.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory

const AdminAdministration = () => {
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
        <div className="administration">
            <div>
                <button onClick={handleCrearUsuariosButton}>Crear Usuarios</button>
                Genera un nuevo usuario.
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleActualizarUsuariosButton}>Actualizar Usuarios</button>
                Actualiza los datos de un usario ya existente.
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleCrearClase}>Crear Clase</button>
                Genera clases virtuales.
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleInsertarAlumno}>Insertar Alumnos a Materias</button>
                Asigna alumnos a las materias deseadas.
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleInsertarLink}>Insertar link zoom a Materias</button>
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleSubirExcel}>Subir de excel</button>
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleDescargarExcel}>Ver tabla de excel</button>
                <div className="a-underline"></div>
            </div>
        </div>
    );

};
export default AdminAdministration;