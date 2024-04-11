import React from "react";
import'./ContenedorMaterias.css'
import BotonMateria from "./BotonMateria";
import imagen_materia from '../Assets/materia.jpg'

const ContenedorMaterias = () =>{
    return(
        <div className="contenedor-materias">
            <BotonMateria imagen={imagen_materia} nombre={"Pescado Derecho"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Pescado Izquierdo"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Almeja Abogada"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Cangrejo Juez"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Langosta Trail"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            
        </div>
    )
}

export default ContenedorMaterias;