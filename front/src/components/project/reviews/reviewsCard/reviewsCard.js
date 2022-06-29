import React, { Fragment } from 'react';
import "./reviewsCard.css";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { formatDate } from '../../../../functions';


const ReviewsCard = ({ text, scoreStyle, scoreFunctionality, scoreOriginality, user, fecha }) => {


    function estrellasFuncion(cantidad) {
        let estrellas = []
        for (let i = 1; i <= cantidad; i++) {
            
            estrellas.push(<ImStarFull className='estrella-color'/>) 
        }
        if (Math.round(cantidad) > cantidad) { estrellas.push(<ImStarHalf className='estrella-color'/>) } //redonde arriba. redondeo abajo
        if (Math.round(cantidad) < 5){
            for (let i = 1; i <= 5-Math.round(cantidad); i++) { 
            estrellas.push(<ImStarEmpty className='estrella-color'/>)}
        }
        return estrellas
    }

    console.log(user)
    return (
        <div className='rcard-cont'>
            <div className='rcard-stars'>
                <p>Estilo: <p>{estrellasFuncion(Number(scoreStyle)).map(e=>e)}</p></p>
                <p>Funcionalidad:<p> {estrellasFuncion(Number(scoreFunctionality)).map(e=>e)}</p></p>
                <p>Originalidad:<p>{estrellasFuncion(Number(scoreOriginality)).map(e=>e)}</p></p>
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