import React, { useState } from "react";
import { getAllLinks } from "../Pages/constants";
import axios from "axios";
import'./ContenedorLinksZoom.css'

const ContenedorLinksZoom = () => {
    const [links, setLinks] = useState([]);
    const [error, setError] = useState(null);

    const getLinks = async () => {
        try {
            const response = await axios.get(getAllLinks);
            setLinks(response.data);
            if (response.data === 0) {
                setError("No hay links.");
            }

        } catch (error) {
            console.error("Error al obtener links.", error);
            setError("Error al cargar links.");
        }
        finally {
            console.log("Finalizó la llamada.");
        }
    }

    return (
        <div className="links-zoom-container">
            <div className="mostrar-links"><button onClick={getLinks}>Mostrar Links</button></div>
            {error && <p>{error}</p>}
            {links.length > 0 && (
                <div className="links-table-holder">
                    <table>
                        <thead>
                            <tr>
                                <th>Matricula de la Clase</th>
                                <th>Enlace Zoom</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {links.map((link, index) => (
                                <tr key={index}>
                                    <td>{link.matricula_clase}</td>
                                    <td>{link.url}</td>
                                    <td>{link.fecha}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default ContenedorLinksZoom;