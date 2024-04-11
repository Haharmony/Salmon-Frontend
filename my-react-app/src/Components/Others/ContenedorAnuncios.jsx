import './ContenedorAnuncios.css'

export const ContenedorAnuncios = ({anuncios}) =>{
    return(
        <div className='contenedor-anuncios'>
            {anuncios}
        </div>
    )
}