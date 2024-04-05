import { ContenedorAnuncios } from './ContenedorAnuncios'
import ContenedorDesplegable from './ContenedorDesplegable'
import './ContenidoTablon.css'

export const ContenidoTablon = ({ imagen_materia, anuncios_tablon, calendario }) => {
    return (
        <div className='contenido-tablon'>
            <img className='imagen-portada' src={imagen_materia} alt='portada'/>
            <div className='contenido'>
                <div className='tablon'>
                    <ContenedorDesplegable  titulo={'Tablón'} contenido={<ContenedorAnuncios anuncios={anuncios_tablon} />} />
                </div>
                <div className='calendario'>
                    <ContenedorDesplegable  titulo={'Calendario'} contenido={calendario} />
                </div>
            </div>
        </div>
    )
}