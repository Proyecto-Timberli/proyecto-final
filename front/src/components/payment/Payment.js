import React, { useState } from "react";
import "./payment.css";


export default function Payment() {
    
    return (
        <div className="card-payment">
            <form className="form-payment">
                <img
                    src="https://thancguide.org/wp-content/uploads/2021/04/help-others-Artboard-10@3x.png"
                    alt="donation"
                    className="donation-image"
                />

                <h3 className="price-payment">$10</h3>

                <button className="btn-payment"> CONTRIBUIR </button>
            </form>
        </div>
    );
};