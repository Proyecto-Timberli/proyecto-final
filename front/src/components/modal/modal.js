import React from 'react';



const Modal = () => {
    //  const dispatch = useDispatch()
    //    let mensajeState = useSelector((state) => state.mensaje)

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