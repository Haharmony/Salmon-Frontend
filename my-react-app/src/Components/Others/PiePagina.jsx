import React from "react";
import'./PiePagina.css'
import footpage from '../Assets/lawbackground23.jpg'

const PiePagina = ({imagenSrc}) =>{
    return(
        <div className="pie-pagina">
            <img src={footpage}  alt="Pie de página" className="imagen"/>
        </div>
    )
}

export default PiePagina;