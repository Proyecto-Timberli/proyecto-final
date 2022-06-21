import React from "react";
import { scroll } from "../../../functions"
import "./payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51LAw3jAfelRzCSD4dKW2R2z0c8chiNwxDHaZcKYqzD0HyctRV5liikAohfqVdIkQtY24J7CGBAbI63bPLmV95VjT00gsBrWflF");
//El string del loadStripe se supone que es una variable de entorno pero no puedo lograr que funcione 




export default function Payment() {
    scroll()

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};