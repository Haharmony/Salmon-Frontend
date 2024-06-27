import React, { useState } from "react";
import { getAllLinks, deleteZoomLink } from "../Pages/constants";
import axios from "axios";
import './ContenedorLinksZoom.css';

const ContenedorLinksZoom = () => {
    const [links, setLinks] = useState([]);
    const [error, setError] = useState(null);

    const getLinks = async () => {
        try {
            const response = await axios.get(getAllLinks);
            setLinks(response.data);
            if (response.data.length === 0) { // Cambié `=== 0` a `length === 0`
                setError("No hay links.");
            }
        } catch (error) {
            console.error("Error al obtener links.", error);
            setError("Error al cargar links.");
        } finally {
            console.log("Finalizó la llamada.");
        }
    };

    const handleDelete = async (idUrl) => {
        try {
            const response = await axios.delete(deleteZoomLink, {
                params: { id_url: idUrl },
            });
            console.log('Respuesta del servidor:', response.data);
            // Actualiza la lista de links después de eliminar
            setLinks(links.filter(link => link.id_url !== idUrl));
        } catch (error) {
            console.error('Error al eliminar la entrada de Zoom:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="links-zoom-container">
            <div className="mostrar-links">
                <button onClick={getLinks}>Mostrar Links</button>
            </div>
            {error && <p>{error}</p>}
            {links.length > 0 && (
                <div className="links-table-holder">
                    <table>
                        <thead>
                            <tr>
                                <th>Matricula de la Clase</th>
                                <th>Enlace Zoom</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {links.map((link, index) => (
                                <tr key={index}>
                                    <td>{link.matricula_clase}</td>
                                    <td>{link.url}</td>
                                    <td>{link.fecha}</td>
                                    <td>{link.hora}</td>
                                    <td>
                                        <div className="zoom-url">
                                            <span onClick={() => handleDelete(link.id_url)}>Eliminar</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ContenedorLinksZoom;