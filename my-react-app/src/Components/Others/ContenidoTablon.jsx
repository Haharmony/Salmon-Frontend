import { useNavigate } from 'react-router-dom'
import { ContenedorAnuncios } from './ContenedorAnuncios'
import ContenedorDesplegable from './ContenedorDesplegable'
import './ContenidoTablon.css'

export const ContenidoTablon = ({ anuncios_tablon, calendario, redireccion }) => {
    const navigate = useNavigate();
    const navigateToMenu = () => {
        const absolutePath = `/${redireccion}`;
        navigate(absolutePath);
    };

    return (
        <div className='contenido-tablon'>
            {/*<img className='imagen-portada' src={backgroundlaw23} alt='portada' />*/}
            <div className='contenido'>
                <div className='tablon'>
                    <ContenedorDesplegable titulo={'Tablón'} contenido={<ContenedorAnuncios anuncios={anuncios_tablon} />} />
                </div>

                <div className='right-side'>
                    <ContenedorDesplegable titulo={'Ligas de Zoom'} contenido={<div className="zoom-url"><span onClick={navigateToMenu}>Ir a las ligas de zoom</span></div>} />
                </div>
            </div>
        </div>
    )
}