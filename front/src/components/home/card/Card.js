import React from 'react'
import './card.css'
import defaultImg from './signup-image.png'
import { Link } from 'react-router-dom';
function Card({ id, name, description, userName, imagen, userId, score }) {
    const arrNumber = score.map((n) => Number(n))
    const sum = arrNumber.reduce((primerScore, siguienteScore) => primerScore + siguienteScore, 0);
    const promedio = (sum/score.length).toFixed(2);

    
    return (
        <div key={id} >
            <div className="card-home">

                <div className="card-img">
                    {imagen.length > 0 ? 
                        <img className='img-project-card' src={imagen[0]} alt='imagen proyecto'></img>
                        :
                        <img src={defaultImg[0]} alt='imagen proyecto'></img>

                    }
                </div>

                <div className="card-info-home">
                    <Link to={"/user/" + userId} className="username-card">
                        <div className="card-user">{userName&&userName.toUpperCase()}</div>
                    </Link>
                    <Link to={"/project/" + id} className="title-card">
                        <p className="text-title-card">{name}</p>
                    </Link>
                    <p className="text-body-card">{description}</p>
                    <p className='text-score-card'>Puntaje total: {promedio}</p>
                </div>

            </div>
        </div>
    )
}

export default Card