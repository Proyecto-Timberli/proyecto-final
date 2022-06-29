import React, { useEffect, useState } from 'react'
import './listado.css'
import { MdWork, MdDoneOutline, MdClear, MdLaptopWindows } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, adminSupendProject } from '../../../redux/actions/actionCreators'
import Paginado from '../../home/Paginado.js'
import { Link } from 'react-router-dom'


function ListadoProjects() {
    let dispatch = useDispatch()
    let allProjects = useSelector((state) => state.allProject)


    useEffect(() => {
        dispatch(getAllProjects());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    const [cardsInPag, setCardsInPag] = useState({
        renderCards: [],
        pag: 1,
    });
    const paginado = new Paginado(9, allProjects, cardsInPag.pag, null, "Any", 1)
    const accionarPaginado = (selectPag, selectFilter) => {
        setCardsInPag({
            ...cardsInPag,
            ...paginado.paginar(selectPag, selectFilter)
        })
    }
    useEffect(() => {
        if (allProjects.length) {
            accionarPaginado(1)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProjects])

    function cambiarEstado(id, state) {
        if (state === 'Aceptado') {
            dispatch(adminSupendProject(id, 'Pendiente'))
        } else if (state === 'Pendiente') {
            dispatch(adminSupendProject(id, 'Aceptado'))
        }
        alert(`Se ha modificado el estado del proyecto`)
        window.location.reload();
    }


    return (
        <div>
            <div className='arriba-contenedor-project'>
                <MdWork className='icono-title-project'/>
                <h1>Listado de Proyectos</h1>
            </div>
            <Link className='volver-admin' to='/admin'> Volver al Panel</Link>

            {(Object.keys(allProjects).length === 0) ? <div>No existen proyectos con esos parametros </div> :
                <div className='contenedor-listado-project'>
                    {
                        cardsInPag.renderCards.map(p => ((!!p) &&
                            <div className='project-card-admin' key={p.id}>

                                <li key={p.id}><b>{p.id}   </b>   <Link to={"/project/" + p.id}>{p.name}</Link> </li>
                                <div className='content-project-state' onClick={(e) => cambiarEstado(p.id, p.state)} >
                                    <p className='state-project'>{p.state} </p>
                                    {
                                        p.state === 'Aceptado' ?
                                            <MdClear className='decline-project' /> :
                                            <MdDoneOutline className='accept-project' />
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
            }
            <div className="container-paginado">
                {paginado.buttons().map(button =>
                    <div key={button}>
                        {cardsInPag.pag !== button && <button className="home-paginado-button" onClick={() => accionarPaginado(button)}>{button}</button>}
                        {cardsInPag.pag === button && <button className="home-paginado-button-select" onClick={() => accionarPaginado(button)}>{button}</button>}
                    </div>
                )}
            </div>

        </div>
    )
}

export default ListadoProjects