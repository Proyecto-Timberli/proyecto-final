import React from 'react';
import { Link } from 'react-router-dom';
import "./cardCommunity.css"

const CardCommunity = ({ name, id, image, short_description, project }) => {
    return (
        <Link className='community-card' id={id} to={`/user/${id}`}>
            <div className='div-user-comunity'>
                <img href={"/user/" + id} src={image} alt="Foto!"></img>
                <div className='text-card-community'>
                    <label className='item-text-card'>{id} <b href={"/user/" + id} >{name}</b></label>
                    <label className='item-text-card'> {!!short_description && short_description !== "Nada" ? short_description : null} </label>
                    <label className='item-text-card'>Total de proyectos: {project.length}</label>
                </div>
            </div>
        </Link>

    );
}
export default CardCommunity;
