import React, { useState } from "react";
import './DropdownMenu.css';

const MenuDesplegable = ({botones}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleMenu}>
                Menú
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    botones
                </div>
            )}
        </div>
    );
};

export default MenuDesplegable;