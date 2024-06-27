import './AnuncioTablon.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useData } from '../Pages/DataContext';
import { getComment, setComment, getCommentMatricula } from '../Pages/constants';

export const AnuncioTablon = ({ nombre, fecha, titulo, imagen, descripcion, comentarios }) => {
    const { data } = useData();
    const { dataClase } = useData();
    const [formData, setFormData] = useState({
        long_text: '',
        matricula_clase: ''
    });
    const [comentariosData, setComentariosData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await enviarDatosAlServidor(formData);
            setFormData({
                long_text: '',
                matricula_clase: ''
            });
        } catch (error) {
            console.error('Error al enviar datos al servidor:', error);
        }
    };

    const obtenerComentariosDelServidor = async () => {
        try {
            const response = await axios.get(getComment);
            setComentariosData(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error al obtener comentarios del servidor:', error);
        }
    };

    const handleSeleccionarTodosLosDatosMatricula = async () => {
        const matriculaClase = dataClase.matricula_clase;
        try {
            const response = await axios.get(`${getCommentMatricula}?matricula_clase=${matriculaClase}`);
            setComentariosData(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error al seleccionar datos:', error);
        }
    };

    const enviarDatosAlServidor = async (datosAEnviar) => {
        try {
            const datosParaEnviar = {
                ...datosAEnviar,
                matricula_maestro: data.matricula,
                fecha: new Date().toISOString() // Establece la fecha actual
            };
            const response = await axios.post(setComment, datosParaEnviar);
            console.log('Respuesta del servidor:', response.data);
        } catch (error) {
            throw new Error('Error al enviar datos al servidor:', error);
        }
    };

    useEffect(() => {
        handleSeleccionarTodosLosDatosMatricula();
    }, []);

    let existe_imagen = null;
    if (imagen && typeof imagen === 'string' && imagen.trim() !== "") {
        existe_imagen = <img className='imagen' src={imagen} alt='imagen' />;
    }

    return (
        <div className='anuncio-tablon'>
            <div className='cabecera'>
                {nombre} - {fecha}
            </div>
            <div className='contenido'>
                {titulo}
                {existe_imagen}
                {descripcion}
            </div>
            <form onSubmit={handleSubmit}>
                <div className='caja-comentarios'>
                    <input type='text' name='long_text' value={formData.long_text} onChange={handleChange} placeholder='Escribe un comentario...' />
                </div>
                <div className='caja-comentarios'>
                    <input type='text' name='matricula_clase' value={formData.matricula_clase} onChange={handleChange} placeholder='Matricula de clase...' />
                </div>
                <div className="submit-comment"><button type="submit">Enviar</button></div>
            </form>
            <div className='comentarios'>
                {Array.isArray(comentariosData) && comentariosData.map((comentario, index) => (
                    <div key={index} className="comment">
                        <div>{comentario.long_text}</div>
                        <div>{comentario.matricula_clase}</div>
                        <div>{comentario.fecha}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};