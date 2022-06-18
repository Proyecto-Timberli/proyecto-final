import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

import "./modal.css"

const ModalProjects = ({ estado, id, nombre, projects }) => {
    const dispatch = useDispatch()
    console.log(projects)

    const [valor, setValor] = useState('')

    function handleOnChange(e) {
        e.preventDefault()
        setValor(e.target.value)
    }
    return (
        <div className='modal'>

            <div className='modal-contenido'>
                <h1>Proyectos de {nombre}</h1>
                <div className='contenedor-project-modal'>
                    {

                        projects.map(e=> (
                            <div className='contenedor-project-modal2' key={e.id}>
                                <div className='project-name-modal'><Link className='project-link-modal' target="_blank" to={'/project/'+ e.id} >{e.name}</Link></div>
                                
                            </div>
                        ))
                            
                        
                    }
                </div>
                <div className='project-content-buttons'>
                
                <button className='boton-cerrar' onClick={(e) => estado()}>Cerrar</button>
                </div>
            </div>
        </div>
    );
}

export default ModalProjects;