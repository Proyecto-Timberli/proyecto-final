import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';


import "./modal.css"

const ModalUser = ({estado, id}) => {
    const dispatch = useDispatch()

    const[valor, setValor] = useState('')
    
    function handleOnChange(e){
        e.preventDefault()
        setValor(e.target.value)
    }
    return (
        <div className='modal'>

                        <div className='modal-contenido'>
                            <h1>Cambiar Rol</h1>
                            <form>
                                <select onChange={handleOnChange}>
                                    <option value='admin'>Admin</option>
                                    <option value='suspended'>Suspended</option>
                                    <option value='user'>User</option>
                                    <option value='premium'>Premium</option>

                                </select>
                            </form>

                            <button onClick={(e) => estado(id, valor)}>Guardar!</button>
                        </div>
                    </div>
    );
}

export default ModalUser;