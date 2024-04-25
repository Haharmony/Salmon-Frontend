import React from "react";
import'./ContenedorMaterias.css'
import BotonMateria from "./BotonMateria";
import imagen_materia from '../Assets/materia.jpg'

const ContenedorMaterias = ({redireccionB}) =>{
    return(
        <div className="contenedor-materias">
            <BotonMateria imagen={imagen_materia} nombre={"Aspectos penales de la empresa"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"} redireccion={redireccionB}/>
            <BotonMateria imagen={imagen_materia} nombre={"Mercado de Valores y Nuevos instrumentos de inversión"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"} redireccion={redireccionB}/>
            <BotonMateria imagen={imagen_materia} nombre={"Responsabilidades civiles por daños"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"} redireccion={redireccionB}/>
            <BotonMateria imagen={imagen_materia} nombre={"Aspectos fiscales y financieros de la empresa"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"} redireccion={redireccionB}/>
            <BotonMateria imagen={imagen_materia} nombre={"Contratos Internacionales"} horario = "L,M,V 10:00hr" salon={"DJ212"} profesor={"Lic. Robles"} redireccion={redireccionB}/>
            
        </div>
    )
}

export default ContenedorMaterias;