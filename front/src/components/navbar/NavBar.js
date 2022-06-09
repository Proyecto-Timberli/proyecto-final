import React from 'react';
import "../navbar/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    let loggin = true
    return (

        <div id='Navbar'>
            <div>
                <Link to="/">LOGO</Link>
            </div>
            <Link to="/home">
                Proyectos
            </Link>
            {loggin ?
                <div className='botones-nav'>
                    <Link to="/user">Perfil </Link>
                    <button>Cerrar secion</button>
                </div>
                :
                <div className='botones-nav'>
                    <Link to="/register">Unirse!</Link>
                    <Link to="/login">Iniciar secion</Link>
                </div>}

        </div>
    );
}

export default Navbar;