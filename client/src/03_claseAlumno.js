import React, { useState } from 'react';
import axios from 'axios';
import { useData } from './DataContext'; // Importa el contexto

//const getLinks = 'http://34.70.85.26:3000/api/zoom/getUltimoLinkZoom';


const getLinks = 'http://192.168.1.89:3000/api/zoom/getUltimoLinkZoom';
//const getLinks = 'http://172.102.0.78:3000/api/zoom/getUltimoLinkZoom';
const ClasesAlumno = () => {
    const { data } = useData(); // Obtiene los datos del contexto
    const [links, setLinks] = useState([]);
    const [showLinks, setShowLinks] = useState(false); // Estado para controlar la visibilidad de los enlaces

    const fetchLinks = async () => {
        if (data) {
            try {
                const response = await axios.get(getLinks, {
                    params: {
                        matriculaAlumno: data.matricula // Utiliza la matrícula del estudiante desde el contexto
                    }
                });
                setLinks(response.data.data);
                setShowLinks(true); // Mostrar los enlaces cuando se cargan
            } catch (error) {
                console.error('Error al obtener los enlaces:', error);
            }
        }
    };

    const handleFetchLinks = async () => {
        if (!showLinks) {
            // Si los enlaces no se están mostrando, cargarlos
            await fetchLinks();
        } else {
            // Si los enlaces se están mostrando, ocultarlos
            setLinks([]);
            setShowLinks(false);
        }
    };

    return (
        <div>
            <h1>Links de Clases</h1>
            <button onClick={handleFetchLinks}>
                {showLinks ? 'Ocultar Links clases' : 'Ver Links clases'}
            </button>
            {showLinks && (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre de la Clase</th>
                            <th>Enlace Zoom</th>
                        </tr>
                    </thead>
                    <tbody>
    {links.map((link, index) => (
        <tr key={index}>
            <td>{link.matricula_clase}</td>
            <td>{link.url}</td>
        </tr>
    ))}
</tbody>

                </table>
            )}
        </div>
    );
};

export default ClasesAlumno;
