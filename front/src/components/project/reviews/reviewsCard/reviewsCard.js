import React, { Fragment } from 'react';
import "./reviewsCard.css";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";


const ReviewsCard = ({ text, scoreStyle, scoreFunctionality, scoreOriginality }) => {

    function estrellas(cantidad) {

        for (let i = 1; i <= cantidad; i++) {
            const element = [i];
            return <ImStarEmpty />
        }
        if (cantidad > cantidad) { return <ImStarHalf /> } //redonde arriba. redondeo abajo
    }


    return (
        <div className='rcard-cont'>
            <div className='rcard-stars'>

            </div>

            <div className='rcard-div-separador'>
                <div className='rcard-infoUser'>
                    <div className='rcard-infoUser-name'><img alt='foto!' /><p>Nombre</p></div>
                    <p>rol</p>
                    <p>Total de reviews</p>
                </div>
                <div placeholder='Lorem~~~~~~~~~~~~~~~~~~~~' className='rcard-text'>
                    <p> Lorem</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewsCard;