import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";
import { listPayments } from "../../../redux/actions/actionCreators.js"
import ModalPayment from "./modalPayment/ModalPayment.js";


export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();

    const [error, setError] = React.useState("");
    const [cargando, setCargando] = React.useState(false);
    const [compraConcretada, setCompraConcretada] = React.useState("");
    const [amount, setAmount] = React.useState(0)

    const handleChange = (e) => {
        setAmount(e.target.value);
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setCompraConcretada("")
        setCargando(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })
        if (error) {
            setError(error.message)
            setCargando(false)

            return
        }

        setError("")
        console.log(paymentMethod)
        let userId = window.localStorage.getItem('userid')
        let token = window.localStorage.getItem('usertoken')
        let data
        //si esta logueado existe el ID, si no envia contribucion anonima:
        if (userId && token) {
            data = await dispatch(listPayments(amount, userId, paymentMethod))
        } else {
            data = await dispatch(listPayments(amount, 'Anonimo', paymentMethod))
        }
        console.log(data)
        //ACA LIMPIAMOS EL INPUT DE LA TARJETA
        setCargando(false)
        if (data.payment && data.payment.status === "succeeded") {
            setCompraConcretada(data.payment)
            elements.getElement(CardElement).clear()
        } else {
            setError("Lo sentimos, algo salio mal ")
        }

    }



    return (
        <div className="card-payment">
            <div className="form-payment">
                <div className="text-payment-container">
                    <h1>¿Por qué colaborar?</h1>
                    <p>Timberli es una plataforma totalmente gratuita. Nuestro sueño es que desarrolladores de todo el mundo puedan dar mayor visibilidad a sus trabajos, inspirarse y conectar con colegas y reclutadores.</p>
                    <p>Si la plataforma te parece útil, considera hacer una donación! Gracias a la participación de gente como tú, Timberli crece cada día y permanece sin publicidad y accesible para todos.</p>
                    <h3>¡Gracias por tu ayuda!</h3>
                </div>
                <form className="form-payment-container" onSubmit={handleSubmit}>
                    <img
                        src="https://thancguide.org/wp-content/uploads/2021/04/help-others-Artboard-10@3x.png"
                        alt="donation"
                        className="donation-image"
                    />
                    <h5 className="form-payment-title">Selecciona el monto a donar en dolares:</h5>
                    <p className="form-payment-subtitle">(Tu tarjeta lo convierte a tu moneda local)</p>
                    <div className='opciones-payment'>
                        <div className="form-check-payment">
                            <input className="form-check-input" type="radio" value='100' name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleChange(e)} />
                            <label className="form-label-payment">
                                $1
                            </label>
                        </div>

                        <div className="form-check-payment">
                            <input className="form-check-input" type="radio" value='500' name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleChange(e)} />
                            <label className="form-label-payment" >
                                $5
                            </label>
                        </div>

                        <div className="form-check-payment">
                            <input className="form-check-input" type="radio" value='1000' name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleChange(e)} />
                            <label className="form-label-payment" >
                                $10
                            </label>
                        </div>
                    </div>
                    <CardElement className="card-element-payment" />
                    {error && <div className="payment-error">{error}</div>}
                    <button className="btn-payment" type="submit" disabled={cargando}> CONTRIBUIR </button>
                    {compraConcretada && <div type="modal" >{<ModalPayment payment={compraConcretada} setearStado={setCompraConcretada} />}</div>}
                    {cargando && <div >Cargando...</div>}
                </form>
            </div>
        </div>
    )
}