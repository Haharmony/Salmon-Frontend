import React from "react";
import'./ContenedorMaterias.css'
import BotonMateria from "./BotonMateria";
import imagen_materia from '../Assets/materia.jpg'

const ContenedorMaterias = () =>{
    return(
        <div className="contenedor-materias">
            <BotonMateria imagen={imagen_materia} nombre={"Materia 1"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Materia 1"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Materia 1"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Materia 1"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            <BotonMateria imagen={imagen_materia} nombre={"Materia 1"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"}/>
            
        </div>
    )
}

export default ContenedorMaterias;