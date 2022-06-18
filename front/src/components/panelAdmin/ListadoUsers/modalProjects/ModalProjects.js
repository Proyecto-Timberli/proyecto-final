import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';


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
                <div>
                    {

                        projects.map(e=> (
                            <div key={e.id}>
                                <label>{e.name}</label>
                                <button>SUSPENDER</button>
                            </div>
                        ))
                            
                        
                    }
                </div>
                <button onClick={(e) => estado(id, valor)}>Guardar!</button>
            </div>
        </div>
    );
}

export default ModalProjects;