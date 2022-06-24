import React from 'react';
import { Link } from 'react-router-dom';
import "./cardCommunity.css"

const CardCommunity = ({ name, id, image, short_description, project }) => {
    return (
        <Link className='community-card' id={id} to={`/user/${id}`}>
            <div className='div-user-comunity'>
                <img href={"/user/" + id} src={image} alt="Foto!"></img>
                <label>{id} <b href={"/user/" + id} >{name}</b></label>
                <div><p> {!!short_description && short_description !== "Nada" ? short_description : null} </p></div>
            </div>
            <label>Total de proyectos: {project.length}</label>

        </Link>

    );
}
export default CardCommunity;
