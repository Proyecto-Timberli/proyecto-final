import React, {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';


import "./modal.css"

const Modal = () => {
    const dispatch = useDispatch()
    const[modalE, setModalE] = useState(0)
    
    let onClickButton = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className='modal'>

            <div className='modal-contenido'>
                <h1>Server Message</h1>
                <p></p>

                <button onClick={onClickButton}>OK!</button>
            </div>
        </div>
    );
}

export default Modal;