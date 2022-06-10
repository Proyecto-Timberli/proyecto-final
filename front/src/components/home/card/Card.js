import React from 'react'
import './card.css'
import imagen from './signup-image.png'
import linkedin from '../../../images/linkedin.png';
import github from '../../../images/github.png';
import { Link } from 'react-router-dom';
function Card({ id, name, description }) {


    return (
        <div key={id} >
            <div className="card">
                <div className="card-img" >
                    <img src={imagen}></img>
                </div>
                <div className="card-info">
                    <p className="text-title">{name}</p>
                    <p className="text-body">{description}</p>
                    <Link to={"/project/" + id} className="card-button">Ver Proyecto</Link>
                </div>
            </div>
        </div>
    )
}

export default Card