import React from "react";
import Carrito from "./Carrito";
import './NavBarStyle.css'
function Navbar () {
    return(
        <nav className="Barra">
            
            <img src="/IMG/ICONO.png" alt="logo" height={110}/>

            <ul className="Lista">
                <li><a href="#"></a> Nike</li>
                <li><a href="#"></a> Puma</li>
                <li><a href="#"></a> Adiddas</li>
            </ul>

            <Carrito />

        </nav>
    )
}

export default Navbar