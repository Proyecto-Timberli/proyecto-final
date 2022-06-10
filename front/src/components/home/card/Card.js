import React from 'react'
import './card.css'
import imagen from './signup-image.png'
import linkedin from '../../../images/linkedin.png';
import github from '../../../images/github.png';
function Card({ key }) {
    console.log(key);
    return (
        <div key={key} >
            <div className="card">
                <div className="card-img" >
                    <img src={imagen}></img>
                </div>
                <div className="card-info">
                    <p className="text-title">Card title</p>
                    <p className="text-body">Lorem Ipsum dolor sit amet</p>
                    <button className="card-button">Ver Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default Card