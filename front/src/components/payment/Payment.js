import React, { useState } from "react";
import { scroll } from "../../functions"
import "./payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe,useElements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe("pk_test_51LAdBzAvcNaaCapmSYP4qmvIjWV8YoVrTxca5HagFQgrPgMyGnafEo8OMqiHJzDfD0M1dNCmyDiTxFJmYvno5OAM00UhfKjAkA");





export default function Payment() {
    scroll()

    const stripe = useStripe();
    const elements = useElements();


    const handleSubmit = async (event) => {
        event.preventDefault();
        stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })
    }


    return (
        <Elements stripe={stripePromise}>

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
                </form>
            </div>
        </Elements>
    );
};