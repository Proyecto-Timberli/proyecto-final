import React from 'react';
import { crearMensajeState } from '../../redux/actions/actionCreators';
import { useDispatch, useSelector } from 'react-redux';


import "./modal.css"

const Modal = () => {
    const dispatch = useDispatch()
    let mensajeState = useSelector((state) => state.server_message)
    let onClickButton = (e) => {
        e.preventDefault();
        dispatch(crearMensajeState(""))
    }
    return (
        <div className='modal'>

            <div className='modal-contenido'>
                <h1>Server Message</h1>
                <p>{mensajeState}</p>

                <button onClick={onClickButton}>OK!</button>
            </div>
        </div>
    );
}

export default Modal;