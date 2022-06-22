import React, { useState } from 'react';


import { Link } from 'react-router-dom'

import './modalReporte.css'

const ModalReport = ({ estado, idA, userID, projectID, nombre }) => {


    const [comentario, setComentario] = useState('')
    function handleOnChange(e) {
        e.preventDefault()
        setComentario(e.target.value)
    }
    return (
        <div key={idA} className='modal'>

            <div className='modal-contenido'>
                <h1>Reportar proyecto  "{nombre}"</h1>
                
                <div>
                    <form className='form-reporte'>
                        <label className='label-reporte'>Motivo del reporte</label>
                        <input type="text" name="report" onChange={handleOnChange}></input>
                    </form>
                </div>
                <div className='project-content-buttons'>
                    <button className='boton-cerrar' onClick={(e) => estado()}>Cancelar</button>
                    <button className='boton-cerrar' onClick={(e) => estado(projectID,userID,comentario)}>Reportar</button>

                </div>
            </div>
        </div>
    );
}

export default ModalReport;