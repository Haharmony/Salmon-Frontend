import './AnuncioTablon.css'

export const AnuncioTablon = ({nombre, fecha, titulo, imagen, descripcion, comentarios}) =>{

    let existe_imagen = <></>;
    if(imagen && typeof imagen === 'string' && imagen.trim() !== ""){
        existe_imagen = <img className='imagen' src={imagen} alt='imagen'/>
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
            <div className='caja-comentarios'>
                <input type='text' placeholder='Escribe un comentario...'/>                
            </div>
            <div className='comentarios'>
                {comentarios}
            </div>
        </div>
    )
}