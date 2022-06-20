import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { sendCheckoutForm } from "../../functions";
import { useDispatch } from "react-redux";
import { listPayments } from "../../redux/actions/actionCreators.js"
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

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
        //Para controlar las contribuciones recibidas:
        let userId = window.localStorage.getItem('userid')
        console.log(userId)
        //si esta logueado existe el ID, si no envia contribucion anonima:
        if (userId) {
            dispatch(listPayments(amount, userId))
        } else {
            dispatch(listPayments(amount, 'Anonimo'))
        }

        //ACA LIMPIAMOS EL INPUT DE LA TARJETA
        setCargando(false)
        setCompraConcretada("Donacion Concretada")
        elements.getElement(CardElement).clear()
    }



    return (
        <div className="card-payment">
            <form className="form-payment" onSubmit={handleSubmit}>
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
                {error && <div >{error}</div>}
                <button className="btn-payment" type="submit" disabled={cargando}> CONTRIBUIR </button>
                {compraConcretada && <div >{compraConcretada}</div>}
                {cargando && <div >Cargando...</div>}
            </form>
        </div>
    )
}