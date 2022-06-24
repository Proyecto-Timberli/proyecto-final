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
    let contribuciones = useSelector(state => state.contributions)
    let reviews = useSelector(state => state.reviews)



    useEffect(() => {

        dispatch(getAllProjects())
        dispatch(getAllUsers());

    }, [])//eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className='cont-general-stats'>
            <h1>ESTADISTICAS</h1>
            <Link className='volver-admin' to='/admin'> Volver al Panel</Link>

            <div className='contenedor-stats'>
                <div className='stat-div'>
                    <h2 className='stats-number'> {usuarios.length} </h2>
                    <label className='stat-name'> USUARIOS </label>
                </div>
                <div className='stat-div'>
                    <h2 className='stats-number'> {proyectos.length} </h2>
                    <label className='stat-name'> PROYECTOS </label>
                </div>
                <div className='stat-div'>
                    <h2 className='stats-number'> {reviews.length} </h2>
                    <label className='stat-name'> REVIEWS </label>
                </div>
                <div className='stat-div'>
                    <h2 className='stats-number'> {contribuciones.length} </h2>
                    <label className='stat-name'> CONTRIBUCIONES </label>
                </div>

            </div>
        </div>
    );
}

export default Stats;