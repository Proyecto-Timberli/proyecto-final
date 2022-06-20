import React, { useEffect } from 'react';
import { getAllProjects } from '../../../redux/actions/actionCreators'
import { getAllUsers } from '../../../redux/actions/actionCreators'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';




const Stats = () => {

    let dispatch = useDispatch()
    let proyectos = useSelector(store => store.allProject)
    let usuarios = useSelector(store => store.allUsers)


    useEffect(() => {

        dispatch(getAllProjects())
        dispatch(getAllUsers());

    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div>
            <h1>Estadisticas</h1>
            <div>
                <label>Total de Usuarios: {usuarios.length} </label>
                <br></br>
                <label>Total de Proyectos: {proyectos.length} </label>
                <br></br>
                <label>Total de Comentarios: 0 </label>
                <br></br>
                <label>Total de Contribuciones: 0 </label>

            </div>
            <Link to="/admin" >Volver al Panel</Link>
        </div>
    );
}

export default Stats;