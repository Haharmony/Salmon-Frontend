import React from "react";
import'./PiePagina.css'

const PiePagina = ({imagenSrc}) =>{
    return(
        <div className="pie-pagina">
            <img src={imagenSrc}  alt="Pie de página" className="imagen"/>
        </div>
    )
}

export default PiePagina;