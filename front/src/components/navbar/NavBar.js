import React, { useEffect } from 'react';
import "../navbar/navbar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedUserId } from '../../redux/actions/actionCreators'

const Navbar = () => {
    let dispatch = useDispatch()
    const userId = useSelector(state => state.loggedUserId)
    
    function logOut() {
        window.localStorage.removeItem('usertoken')
        dispatch(setLoggedUserId(null))
    }

    function navbarButtons() {
        // si está logeado
        if (userId) {
            return (
                <div className='botones-nav'>
                    <Link to={"/user/" + userId}>
                        <button className='btn-perfil-navBar'> Perfil </button>
                    </Link>
                    <Link to='/'>
                        <button onClick={logOut} className='btn-logout-navBar'> Salir </button>
                    </Link>
                </div>
            )
        } else {
            return (<div className='botones-nav'>
            <Link to="/register"> 
                <button className='btn-register-navBar'> Unirse </button>
            </Link>
            <Link to="/login"> 
                <button className='btn-login-navBar'> Login </button>
            </Link>
        </div>)
        }
    }
    
    // antes de renderizar, verificamos si hay token de usuario
    

    return (
        <div id='Navbar'>
            <div>
                <Link to="/" className='logo-navBar'>T.</Link>
            </div>
            <Link to="/home" className='verTodo-navBar'>
                VER PROYECTOS
            </Link>
            {navbarButtons()}

        </div>
    );
}

export default Navbar;