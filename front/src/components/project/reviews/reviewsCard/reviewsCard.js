import React, { Fragment } from 'react';
import "./reviewsCard.css";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import { formatDate } from '../../../../functions';


const ReviewsCard = ({ text, scoreStyle, scoreFunctionality, scoreOriginality, user, fecha }) => {


    function estrellasFuncion(cantidad) {
        let estrellas = []
        for (let i = 1; i <= cantidad; i++) {
            
            estrellas.push(<ImStarFull className='estrella-color' key={i}/>) 
        }
        if (Math.round(cantidad) > cantidad) { estrellas.push(<ImStarHalf className='estrella-color' />) } //redonde arriba. redondeo abajo
        if (Math.round(cantidad) < 5){
            for (let i = 1; i <= 5-Math.round(cantidad); i++) { 
            estrellas.push(<ImStarEmpty className='estrella-color' key={i + 10}/>)}
        }
        return estrellas
    }

    
    return (
        <div className='rcard-cont'>
            <div className='rcard-stars'>
                <p>Estilo: <br/> <b>{estrellasFuncion(Number(scoreStyle)).map(e=>e)}</b></p>
                <p>Funcionalidad: <br/> <b> {estrellasFuncion(Number(scoreFunctionality)).map(e=>e)}</b></p>
                <p>Originalidad: <br/> <b>{estrellasFuncion(Number(scoreOriginality)).map(e=>e)}</b></p>
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