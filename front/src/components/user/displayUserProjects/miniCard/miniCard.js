import React from 'react'
import './miniCard.css'
import { Link } from 'react-router-dom';

function MiniCard({ id, name, description, imagen }) {
    return (
        <div key={id} className="miniCard" >
            {/* <div className="miniCard">
    
                    
                <div className="MiniCard-info">
                    <p className="text-title">{name}</p>
                    <p className="text-body">{description}</p>
                    <Link to={"/project/" + id} className="MiniCard-button">Ver Proyecto</Link>
                </div>
            </div> */}

        <img className="MiniCard-img" src="https://img.freepik.com/vector-gratis/ilustracion-icono-carpeta-datos_53876-6329.jpg?w=360" alt="project-img"></img>
        
        <div className="MiniCard-info">
            <p className="MiniCard-title">{name}</p>
            <p className="MiniCard-body">{description}</p>
            <Link to={"/project/" + id} className="MiniCard-button">Ver Proyecto</Link>
        </div>


        </div>
    )
}

export default MiniCard