import { ContenedorAnuncios } from './ContenedorAnuncios'
import ContenedorDesplegable from './ContenedorDesplegable'
import './ContenidoTablon.css'
import backgroundlaw23 from '../Assets/footpage.jpg'

export const ContenidoTablon = ({ anuncios_tablon, calendario }) => {
    return (
        <div className='contenido-tablon'>
            {/*<img className='imagen-portada' src={backgroundlaw23} alt='portada' />*/}
            <div className='contenido'>
                <div className='tablon'>
                    <ContenedorDesplegable titulo={'Tablón'} contenido={<ContenedorAnuncios anuncios={anuncios_tablon} />} />
                </div>

                <div className='right-side'>
                    <ContenedorDesplegable titulo={'Zoom Link'} contenido={<div className="zoom-url"><span>https://zoom.com</span></div>} />
                    <div className='calendario'>
                        <ContenedorDesplegable titulo={'Calendario'} contenido={calendario} />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}