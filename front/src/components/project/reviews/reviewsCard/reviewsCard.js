import React, { Fragment } from 'react';
import "./reviewsCard.css";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";


const ReviewsCard = ({ text, scoreStyle, scoreFunctionality, scoreOriginality, user }) => {

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
                <p>Estilo:{scoreStyle}</p>
                <p>Funcionalidad:{scoreFunctionality}</p>
                <p>Originalidad:{scoreOriginality}</p>
            </div>

            <div className='rcard-div-separador'>
                <div className='rcard-infoUser'>
                    <div className='rcard-infoUser-name'><img alt='foto!' src={user.image} /><p>{user.name}</p></div>
                    <p>{user.shortDescription}</p>
                    <p>Total de reviews</p>
                </div>
                <div className='rcard-text'>
                    <p> {text}</p>
                </div>
            </div>
        </div>
    );
}

export default ReviewsCard;