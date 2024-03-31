import React, { useState, useRef, useEffect } from "react";
import './BotonDesplegableBarraSuperior.css';

const BotonDesplegableBarraSuperior = ({ imagenSrc, texto, menu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="boton-desplegable-container">
            <button className="boton-desplegable-barra-superior" onClick={toggleMenu}>
                <img src={imagenSrc} alt="Imagen" className="imagen-boton-barra-superior" />
                <span className="texto-boton-barra-superior">{texto}</span>
            </button>
            {isOpen && (
                <div ref={menuRef} className="dropdown-menu">
                    {menu}
                </div>
            )}
        </div>
    );
};

export default BotonDesplegableBarraSuperior;