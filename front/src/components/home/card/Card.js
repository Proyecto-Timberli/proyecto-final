import React from 'react'
import './card.css'
import defaultImg from './signup-image.png'
import linkedin from '../../../images/linkedin.png';
import github from '../../../images/github.png';
import { Link } from 'react-router-dom';
function Card({ id, name, description, user, imagen }) {


    return (
        <div key={id} >
            <div className="card-home">

                <div className="card-user">{user.toUpperCase()}</div>
                <div className="card-img" >
                    {
                        imagen.length > 0 ? 
                        
                        <img className='img-project-card' src={imagen[0]}></img>
                        
                        
                        :
                        <img src={defaultImg[0]}></img>

                    }

                </div>
                <div className="card-info-home">
                    <p className="text-title-card">{name}</p>
                    <p className="text-body-card">{description}</p>
                    <Link to={"/project/" + id} className="card-button-home">Ver Proyecto</Link>
                </div>
            </div>
        </div>
    )
}

export default Card