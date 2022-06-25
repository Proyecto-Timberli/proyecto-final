import React from 'react';

import { Link } from 'react-router-dom'

import "./modal.css"

const ModalProjects = ({ estado, id, nombre, projects }) => {


    return (
        <div key={id} className='modal'>

            <div className='modal-contenido'>
                <h1>Proyectos de {nombre}</h1>
                <div className='contenedor-project-modal'>
                    {

                        projects.map(e => (
                            <div className='contenedor-project-modal2' key={e.id}>
                                <div className='project-name-modal'><Link className='project-link-modal' target="_blank" to={'/project/' + e.id} >{e.name}</Link></div>

                            </div>
                        ))


                    }
                </div>
                <div className='project-content-buttons'>

                    <button className='boton-cerrar' onClick={(e) => estado()}>CERRAR</button>
                </div>
            </div>
        </div>
    );
}

export default ModalProjects;