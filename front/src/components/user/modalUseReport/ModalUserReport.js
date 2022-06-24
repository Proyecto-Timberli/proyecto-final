import React, { useState } from 'react';


const ModalUserReport = ({ estado, idA, userID ,reporterID,  nombre }) => {

    const[error, setError] = useState(0)

    const [comentario, setComentario] = useState('')
    function handleOnChange(e) {
        e.preventDefault()
        setComentario(e.target.value)
    }

   const validar = () => {
    if(comentario.length>0){
        estado(userID,reporterID,comentario)

    }else{
        setError(1)
        
    }
   }
    return (
        <div key={idA} className='modal'>

            <div className='modal-contenido'>
                <h1>Reportar usuario  "{nombre}"</h1>
                
                <div>
                    <form className='form-reporte'>
                        <label className='label-reporte'>Motivo del reporte</label>
                        <input type="text" name="report" onChange={handleOnChange} placeholder="MOTIVO OBLIGATORIO"></input>
                        {
                            error ? 
                            <p className="error-modalReport">ERROR, EL MOTIVO ES OBLIGATORIO</p>
                            : 
                            null
                        }
                    </form>
                </div>
                <div className='project-content-buttons'>
                    <button className='boton-cerrar' onClick={(e) => estado()}>Cancelar</button>
                    {
                        comentario.length === 0 ?
                        <button className='boton-cerrar-des' disabled={true} onClick={(e) =>{validar()} }>Reportar</button>
                        : 
                        <button className='boton-cerrar' disabled={false} onClick={(e) =>{validar()} }>Reportar</button>

                    }

                </div>
            </div>
        </div>
    );
}

export default ModalUserReport;