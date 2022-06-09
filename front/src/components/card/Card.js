import React from 'react'
import './card.css'
import imagen from './signup-image.png'
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
function Card() {
    return (
        <div>
            <div class="card">
                <div class="card-img" >
                    <img src={imagen}></img>
                </div>
                <div class="card-info">
                    
                    <p class="text-title">Card title</p>
                    <p class="text-body">Lorem Ipsum dolor sit amet</p>
                    <button class="card-button">Ver Proyecto</button>
                </div>
            </div>
        </div>
    )
}

export default Card