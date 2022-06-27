import React, { useState } from 'react'
import "./ModalPayment.css"
import { sendEmail } from '../../../../redux/actions/actionCreators'
import { useNavigate } from 'react-router-dom';

export default function ModalPayment({ payment, setearStado }) {
    let navigate = useNavigate();
    let [mailInput, setMailunput] = useState("")
    let token = window.localStorage.getItem('usertoken')
    function onChangeMail(e) {
        setMailunput(e.target.value)
    }
    function onSubmitMail(e, op) {
        if (op === "s") {

            e.preventDefault()
            if (token) {
                let userId = window.localStorage.getItem('userid')
                sendEmail({ userId, email: "", payment })
                return setearStado(false)
            }
            sendEmail({ userId: "", email: mailInput, payment })
            setearStado(false)
            navigate("/home")
            return
        }
        navigate("/home")
    }
    return (
        <div className='modalP'>
            <div className='modal-contenidoP'>
                <h1 className='modadl-payment-titulo'>Gracias por tu colaboracion a Timberli! </h1>
                <p className='texto-modal-payment'> Por gente como tu, Timberli sigue expendiendose y llegando a mas rincones de latinoamerica.
                    Gracias a tu granito de arena podremos lograr que el mundo sea un lugar mejor, mas feliz y mas equitativo.
                </p>
                {token ?
                    <div className='container-modal-payment'>
                        <p className='texto-modal-payment'>No te preocupes por tus datos bancarios, quedan totalmente resguardados. Si deseas recibir el comprobante a tu correo da click en "Si" y si no da click en "No".</p>
                        <div className='project-content-buttons'>
                            <button className='boton-cerrar' onClick={e => onSubmitMail(e, "s")}>Si</button>
                            <button className='boton-cerrar' onClick={e => onSubmitMail(e, "n")}>No</button>
                        </div>
                    </div>
                    :
                    <div className='container-modal-payment'>
                        <p className='texto-modal-payment'>No te preocupes por tus datos bancarios, quedan totalmente resguardados y tu donacion quedara como anonima. Si deseas recibir el comprobante, por favor ingresa tu correo y da click en "Si", si no da click en "No".</p>
                        <input
                            placeholder='timberli@gmail.com'
                            className='input-modal-payment'
                            onChange={e => onChangeMail(e)}></input>
                        <div className='project-content-buttons'>
                            <button className='buttons' onClick={e => onSubmitMail(e, "s")}>Si</button>
                            <button className='buttons' onClick={e => onSubmitMail(e, "n")}>No</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
