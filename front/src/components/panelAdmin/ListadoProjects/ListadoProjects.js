import React, { useEffect, useState } from 'react'
import './listado.css'
import { MdWork, MdDoneOutline, MdClear } from "react-icons/md";
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

    async function cambiarEstado(id, state) {

        if (state === 'Aceptado') {

            await dispatch(adminSupendProject(id, 'Pendiente'))

        } else if (state === 'Pendiente') {
            await dispatch(adminSupendProject(id, 'Aceptado'))
        }

        await dispatch(getAllProjects());

    }


    return (
        <div>
            <div className='arriba-contenedor-project'>
                <MdWork className='icono-title-project' />
                <h1>Listado de Proyectos</h1>
            </div>
            <Link className='volver-admin' to='/admin'> Volver al Panel</Link>

            {(Object.keys(allProjects).length === 0) ? <div>No existen proyectos con esos parametros </div> :
                <div className='contenedor-listado-project'>
                    {
                        cardsInPag.renderCards.map(p => ((!!p) &&
                            <div className='project-card-admin' key={p.id}>
                                <li key={p.id}> <Link to={"/project/" + p.id}>{p.name}</Link> </li>
                                <div className='content-project-state'>
                                    <p className='state-project'>{p.state}</p>
                                    {
                                        p.state === 'Aceptado' ?
                                            <MdClear className='decline-project' onClick={(e) => cambiarEstado(p.id, p.state)} /> :
                                            <MdDoneOutline className='accept-project' onClick={(e) => cambiarEstado(p.id, p.state)} />
                                    }
                                </div>

                            </div>
                        ))
                    }
                </div>
            }
            <div>
                {paginado.buttons().map(button =>
                    <div className="container-paginado" key={button}>
                        {cardsInPag.pag !== button && <button className="home-paginado-button" onClick={() => accionarPaginado(button)}>{button}</button>}
                        {cardsInPag.pag === button && <button className="home-paginado-button-select" onClick={() => accionarPaginado(button)}>{button}</button>}
                    </div>
                )}
            </div>


        </div>
    )
}

export default ListadoProjects