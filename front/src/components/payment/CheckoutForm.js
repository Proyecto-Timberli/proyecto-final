import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { sendCheckoutForm } from "../../functions";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = React.useState("");
    const [compraConcretada, setCompraConcretada] = React.useState("");
    const [amount, setAmount] = React.useState(0)

    const handleChange = (e) => {
        setAmount(e.target.value);
        console.log(amount)
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })
        if (error) {
            setError(error.message)
            return
        }


        const { id } = paymentMethod;
        console.log(paymentMethod)
        setError("")
        
        //FUNCION QUE MANDA NUESTROS DATOS PARA EL BACKEND(sendCheckoutForm)
        const { data } = await sendCheckoutForm(id, amount)
        //ACA SI EXISTE DATA.CODE QUIERE DECIR QUE HAY UN MENSAJE DE ERROR Y SE MUESTRA
        if (data.code) {
            //setError(data.raw.message)
            setError(data.raw.message)
            return
        }
        setError("")
        console.log(data)
        //ACA LIMPIAMOS EL INPUT DE LA TARJETA
        setCompraConcretada("Compra concretada")
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
                <div className='opciones-payment'>
                        <div className="form-check-payment">
                            <input className="form-check-input" type="radio" value='100' name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleChange(e)}/>
                            <label className="form-label-payment">
                                u$d 1
                            </label>
                        </div>

                        <div className="form-check-payment">
                            <input className="form-check-input" type="radio" value='500' name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleChange(e)}/>
                            <label className="form-label-payment" >
                                u$d 5
                            </label>
                        </div>

                        <div className="form-check-payment">
                            <input className="form-check-input" type="radio"  value='1000' name="flexRadioDefault" id="flexRadioDefault1" onChange={(e) => handleChange(e)}/>
                            <label className="form-label-payment" >
                                u$d 10
                            </label>
                        </div>
                </div>
                <CardElement className="card-element-payment"/>
                {error && <div >{error}</div>}
                <button className="btn-payment" type="submit"> CONTRIBUIR </button>
                {compraConcretada && <div >{compraConcretada}</div>}
            </form>
        </div>
    )
}