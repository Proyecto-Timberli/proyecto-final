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
    
    function checkIfLoggedIn() {
        // revisamos si hay token
        let usertoken = window.localStorage.getItem('usertoken')

        // si no hay token, seteamos a null
        if (!usertoken){
            dispatch(setLoggedUserId(null))
        } else {

            // si hay token, debiera haber userid...
            let userid = window.localStorage.getItem('userid')

            // si no hay userid, deslogear
            if (!userid) {
                dispatch(setLoggedUserId(null))   

            // si HAY userid, logearse en toda la app
            } else {
                dispatch(setLoggedUserId(userid))
            }
        }
    }

    // antes de renderizar, verificamos si hay token de usuario
    checkIfLoggedIn()
    

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