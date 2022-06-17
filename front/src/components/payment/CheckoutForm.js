import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { sendCheckoutForm } from "../../functions";

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = React.useState("");
    const [compraConcretada, setCompraConcretada] = React.useState("");




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
        const { data } = await sendCheckoutForm(id)
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

                <h3 className="price-payment">$10</h3>
                <CardElement />
                <button className="btn-payment" type="submit"> CONTRIBUIR </button>
                {error && <div >{error}</div>}
                {compraConcretada && <div >{compraConcretada}</div>}
            </form>
        </div>
    )
}