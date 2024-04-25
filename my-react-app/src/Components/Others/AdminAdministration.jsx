import React from 'react';
import './AdminAdministration.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useHistory

const AdminAdministration = () => {
    const navigation = useNavigate();

    const handleCrearUsuariosButton = () => {
        navigation("/create-user");
    };
    const handleActualizarUsuariosButton = () => {
        navigation("/update-user");
    };
    const handleCrearClase = () => {
        navigation("/create-class");
    };
    const handleInsertarAlumno = () => {
        navigation("/assign-class");
    };
    const handleInsertarLink = () => {
        navigation("/zoom-link");
    };

    const handleDescargarExcel = () => {
        navigation("/excel-table");
    };
    const handleSubirExcel = () => {
        navigation("/upload-excel");
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
                Asigna un link de Zoom a las materias deseadas.
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleSubirExcel}>Subir de excel</button>
                Suba archivos de excel.
                <div className="a-underline"></div>
            </div>
            <div>
                <button onClick={handleDescargarExcel}>Ver tabla de excel</button>
                Visualice archivos de excel.
                <div className="a-underline"></div>
            </div>
        </div>
    );

};
export default AdminAdministration;