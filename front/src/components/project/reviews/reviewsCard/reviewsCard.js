import React, { Fragment } from 'react';
import "./reviewsCard.css";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { formatDate } from '../../../../functions';


const ReviewsCard = ({ text, scoreStyle, scoreFunctionality, scoreOriginality, user, fecha }) => {


    function estrellas(cantidad) {

        for (let i = 1; i <= cantidad; i++) {
            const element = [i];
            return <ImStarEmpty />
        }
        if (cantidad > cantidad) { return <ImStarHalf /> } //redonde arriba. redondeo abajo
    }

    console.log(user)
    return (
        <div className='rcard-cont'>
            <div className='rcard-stars'>
                <p>Estilo:{scoreStyle}</p>
                <p>Funcionalidad:{scoreFunctionality}</p>
                <p>Originalidad:{scoreOriginality}</p>
            </div>

            <div className='rcard-div-separador'>
                <div className='rcard-infoUser'>
                    <div className='rcard-infoUser-name'><img alt='foto!' src={user.image}/> <p>{user.name}</p></div>
                    <p>{user.short_description}</p>
                </div>
                <div className='rcard-text'>
                    <p> {text}</p>
                </div>
                <div>{formatDate(fecha)}</div>
            </div>
        </div>
    );
}

export default ReviewsCard;