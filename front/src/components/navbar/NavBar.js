import React from 'react';
import "../navbar/navbar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loggin } from '../../redux/actions/actionCreators'

const Navbar = () => {
    let dispatch = useDispatch()
    const logged = useSelector((state) => state.logged);

    const cambioLogin = () => {
        dispatch(loggin())
    }
    
    return (
        <div id='Navbar'>
            <div>
                <Link to="/" className='logo-navBar'>T.</Link>
            </div>
            <Link to="/home" className='verTodo-navBar'>
                VER PROYECTOS
            </Link>
            {logged ?
                <div className='botones-nav'>
                    <Link to="/user">
                        <button className='btn-perfil-navBar'> Perfil </button>
                    </Link>
                    <button onClick={cambioLogin} className='btn-logout-navBar'> Salir </button>
                </div>
                :
                <div className='botones-nav'>
                    <Link to="/register"> 
                        <button className='btn-register-navBar'> Unirse </button>
                    </Link>
                    <Link to="/login"> 
                        <button onClick={cambioLogin} className='btn-login-navBar'> Login </button>
                    </Link>
                </div>}

        </div>
    );
}

export default Navbar;