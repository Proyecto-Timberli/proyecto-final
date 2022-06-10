import React, { useEffect } from 'react'
import imagen from './signup-image.png'
import { Link, useParams } from 'react-router-dom'
import './project.css'
import { useDispatch, useSelector } from "react-redux";
import { getProjectById } from '../../redux/actions/actionCreators'

import Cargando from '../cargando/cargando';


function Project() {

    const { id } = useParams();

    let dispatch = useDispatch()
    let project = useSelector((state) => state.projectById)


    useEffect(() => {
        dispatch(getProjectById(id))
    }, [])

    console.log(project.user);
    //     name: 'Henry Food', 
    //tecnology: 'React, Redux, Express.js', 
    //description: 'Proyecto Henry Foods para mostrar como ejemplo en clases', 
    //repository: 'none',
    // createdAt: "2022-06-10T18:22:03.038Z"
    // deploying: "none"
    // description: "Proyecto Henry Foods para mostrar como ejemplo en clases"
    // id: 1
    // name: "Henry Food"
    // repository: "none"
    // score: "[1,2,3]"
    // tecnology: "React, Redux, Express.js"
    // updatedAt: "2022-06-10T18:22:03.095Z"
    // user: { id: 1, name: 'Luciano', userName: 'luciano', mail: 'luciano@mail.com', password: 'password', … }
    // userId: 1
    if (Object.keys(project).length === 0) return <Cargando />
    return (
        <div>
            <div className='card-container'>
                <h2 className='tituloDetalle'>{project.name}</h2>
                <div className='Contenedor-detalles'>
                    <div className='cont-img-detalle'>
                        {/* IMAGEN */}
                        <img className='card-img-detalle' src={imagen}></img>
                    </div>
                    {/*  */}
                    <div className='cont-info'>
                        {/*Usuario*/}
                        <div >
                            <h3>Usuario:</h3>
                            <div className='info-detalle' >{project.user.name}</div>
                        </div>
                        {/* Deploy */}

                        <div >
                            <h3>Deploy:</h3>
                            {project.deploying === "none" ? <div className='info-detalle'>Sin Deploy</div> : <div className='info-detalle' ><a href={project.deploying}> Link Deploy</a></div>}

                        </div>
                        {/* GitHub */}
                        <div>
                            <h3>GitHub:</h3>
                            {project.user.github === "none" ? <div className='info-detalle'>Sin GitHub</div> : <div className='info-detalle' ><a href={project.deploying}> Link Deploy</a></div>}
                        </div>

                        {/* Linkedin */}
                        <div>
                            <h3>Linkedin:</h3>
                            {project.user.linkedin === "none" ? <div className='info-detalle'>Sin Linkedin</div> : <div className='info-detalle' ><a href={project.user.linkedin}> Link Deploy</a></div>}
                        </div>

                    </div>
                </div>
                {/*DESCRIPTION */}
                <div>
                    <div className='desc-detalle'>
                        <h3>Descripcion:</h3>
                        <div>
                            {project.description}
                        </div>
                        <h3>Tecnologias:</h3>
                        <div>
                            {project.tecnology}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project