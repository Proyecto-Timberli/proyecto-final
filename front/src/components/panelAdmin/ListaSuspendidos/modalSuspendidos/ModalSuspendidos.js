import React, { useState } from 'react';
import "./modal.css"

const ModalUser = ({ estado, id, reset }) => {


    const [valor, setValor] = useState('')

    function handleOnChange(e) {
        e.preventDefault()
        setValor(e.target.value)
    }
    return (
        <div className='modal'>

            <div className='modal-contenido'>
                <h1 className='titulo-modal-admin'>Cambiar Rol</h1>
                <form>
                    <select className='select-modal-admin' onChange={handleOnChange}>
                        <option>--- ELEGIR ROL ---</option>
                        <option value='admin'>Admin</option>
                        <option value='suspended'>Suspended</option>
                        <option value='user'>User</option>
                        <option value='premium'>Premium</option>

                    </select>
                </form>
                <div className='project-content-buttons'>
                    <button className='btn-modal-admin' onClick={(e) => estado(id, valor)}>GUARDAR</button>
                    <button className='btn-modal-admin' onClick={(e) => reset()}>CERRAR</button>
                </div>
            </div>
        </div>
    );
}

export default ModalUser;