import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';


import "./modal.css"

const ModalUser = ({estado}) => {
    const dispatch = useDispatch()

    
    let onClickButton = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className='modal'>

                        <div className='modal-contenido'>
                            <h1>Cambiar Rol</h1>
                            <form>
                                <select>
                                    <option>Admin</option>
                                    <option>Suspended</option>
                                    <option>User</option>
                                    <option>Premium</option>

                                </select>
                            </form>

                            <button onClick={(e) => estado(e)}>Guardar!</button>
                        </div>
                    </div>
    );
}

export default ModalUser;