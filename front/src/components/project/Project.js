import React, { useEffect, useState } from 'react'
import imagen from './signup-image.png'
import { Link, useParams } from 'react-router-dom'
import './project.css'
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from '../../redux/actions/actionCreators'
import Paginado from './paginado-imagenes.js'
import Cargando from '../cargando/cargando';




function Project() {
    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////
    const { id } = useParams();
    let dispatch = useDispatch()
    let project = useSelector((state) => state.projectById)
    useEffect(() => {
        dispatch(getProjectById(id))
    }, [])
    ////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////paginado imagenes/////////////////////////////////////
    const [cardsInPag, setCardsInPag] = useState({
        renderCards: [],
        pag: 1,
    });
    const paginado = new Paginado(1, project.imagen, cardsInPag.pag, null, "Any", 1)
    const accionarPaginado = (selectPag, selectFilter) => {
        setCardsInPag({
            ...cardsInPag,
            ...paginado.paginar(selectPag, selectFilter)
        })
    }
    useEffect(() => {
        if (Object.keys(project).length && project.imagen.length) {
            accionarPaginado(1)
        }
    }, [project])
    ////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////

    console.log(project.user);

    if (!Object.keys(project).length) return <Cargando />

    return (

        <React.Fragment>
            <div className='detail-container'>
                <div className='project-title-container'><h2 className='project-title'>{project.name}</h2></div>
                <div className='Contenedor-detalles'>
                    <div className='cont-info'>
                        <div>
                            <h3>Puntuacion:</h3>
                            <div className='info-detalle' >{(project.score[0] | project.score[1] | project.score[2])}</div>
                        </div>
                        <div >
                            <h3>Usuario:</h3>
                            <div className='info-detalle' >{project.user.name}</div>
                        </div>
                    </div>

                    <div className='cont-img-detalle'>
                        {cardsInPag.renderCards.map(image => (!!image) &&
                            <img key={image} className='card-img-detalle' src={image}></img>)}
                        <div className="project-paginado-button-container">
                            {paginado.buttons().map(button =>
                                <div key={button}>
                                    {cardsInPag.pag !== button && <button className="project-paginado-button" onClick={() => accionarPaginado(button)}></button>}
                                    {cardsInPag.pag === button && <button className="project-paginado-button-select" onClick={() => accionarPaginado(button)}></button>}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='cont-info'>
                        <div >
                            <h3>Deploy:</h3>
                            {project.deploying === "none" ? <div className='info-detalle-link'>Sin Deploy</div> : <div className='info-detalle-link' ><a href={project.deploying}> Link Deploy</a></div>}

                        </div>
                        {/* GitHub */}
                        <div>
                            <h3>GitHub:</h3>
                            {project.repository === "none" ? <div className='info-detalle-link'>Sin GitHub</div> : <div className='info-detalle-link' ><a href={project.repository}> Link GitHub</a></div>}
                        </div>

                    </div>
                </div>
                {/*DESCRIPTION */}
                <div>
                    <div className='desc-detalle'>
                        <h3 >Descripcion:</h3>
                        <div>
                            <p className="text">{project.description}</p>
                        </div>
                        <h3>Tecnologias:</h3>
                        <div>
                            <p className="text">{project.tecnology}</p>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Project