import React from 'react';
import "../navbar/navbar.css"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const PanelAdmin = () => {
    let dispatch = useDispatch()
    const adminLogged = useSelector((state) => state.logged)
    const cambioLogin = () => {
        dispatch(loggin())
    }
    //////////////////////////////////////////////////////////
    //traer usuarios con sus proyectos
    
    //////////////////////////////////////////////////////////
    
    return (
        <div>
             <h1>Panel de admin</h1>
        </div>
    );
}

export default PanelAdmin;