import React, { useEffect, useState } from 'react'
import './listado.css'
import { MdWork,MdDoneOutline,MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from '../../../redux/actions/actionCreators'
import Paginado from '../../home/Paginado.js'
import {Link} from 'react-router-dom'


function ListadoProjects() {
    let dispatch = useDispatch()
    let allProjects = useSelector((state) => state.allProject)
    const[estado, setEstado] = useState('Aceptado')
    useEffect(() => {
        dispatch(getAllProjects());
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
    }, [allProjects])

    function cambiarEstado(e){

        if(estado == 'Aceptado'){
            setEstado('Pendiente')
        }else if(estado == 'Pendiente'){
            setEstado('Aceptado')
        }
    }


    return (
        <div>
            <div className='arriba-contenedor-project'>
                <MdWork className='icono-title-project' />
                <h1>Listado de Proyectos</h1>
            </div>

                {(Object.keys(allProjects).length === 0) ? <div>No existen proyectos con esos parametros </div> :
            <div className='contenedor-listado-project'>
                {
                    cardsInPag.renderCards.map(p =>( (!!p) &&
                        <div className='project-card-admin' key={p.id}>
                            <li  key={p.id}> <Link to={"/project/" + p.id}>{p.name}</Link> </li>
                            <div className='content-project-state'>
                                <p className='state-project'>{estado}</p>
                                {
                                    estado === 'Aceptado' ? 
                                    <MdClear className='decline-project' onClick={(e) => cambiarEstado(e)}/> :
                                    <MdDoneOutline className='accept-project'  onClick={(e) => cambiarEstado(e)}/>
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