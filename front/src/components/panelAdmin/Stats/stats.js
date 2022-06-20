import React, { useEffect } from 'react';
import { getAllProjects } from '../../../redux/actions/actionCreators'
import { getAllUsers } from '../../../redux/actions/actionCreators'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import "./stats.css";



const Stats = () => {

    let dispatch = useDispatch()
    let proyectos = useSelector(store => store.allProject)
    let usuarios = useSelector(store => store.allUsers)


    useEffect(() => {

        dispatch(getAllProjects())
        dispatch(getAllUsers());

    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className='cont-general-stats'>
            <h1>Estadisticas</h1>
            <Link className='volver-admin' to='/admin'> Volver al Panel</Link>

            <div className='contenedor-stats'>
                <label>Total de Usuarios: {usuarios.length} </label>
                <br></br>
                <label>Total de Proyectos: {proyectos.length} </label>
                <br></br>
                <label>Total de Comentarios: 0 </label>
                <br></br>
                <label>Total de Contribuciones: 0 </label>

            </div>
        </div>
    );
}

export default Stats;