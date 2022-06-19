import React, { useState } from 'react';

// import { useDispatch, useSelector } from 'react-redux';


import "./modal.css"

const ModalUser = ({ estado, id, reset }) => {
    // const dispatch = useDispatch()


    const [valor, setValor] = useState('')

    function handleOnChange(e) {
        e.preventDefault()
        setValor(e.target.value)
    }
    return (
        <div className='modal'>

            <div className='modal-contenido'>
                <h1>Cambiar Rol</h1>

                <form>
                    <select onChange={handleOnChange}>
                        <option>--- ELEGIR ROL ---</option>
                        <option value='admin'>Admin</option>
                        <option value='suspended'>Suspended</option>
                        <option value='user'>User</option>
                        <option value='premium'>Premium</option>

                    </select>
                </form>

                <div className='project-content-buttons'>
                    <button onClick={(e) => estado(id, valor)}>Guardar!</button>
                    <button onClick={(e) => reset()}>Cerrar!</button>
                </div>


            </div>
        </div>
    );
}

export default ModalUser;