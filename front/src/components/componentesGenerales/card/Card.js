import React from 'react'
import './card.css'
import defaultImg from './signup-image.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { addFavorites, deleteFavorite } from '../../../redux/actions/actionCreators';
import { formatDate, getDateTime } from '../../../functions';

function Card({ id, name, description, fecha, imagen, userId, score, update, user, technology }) {

    let listUserFavorites = useSelector((state) => state.listFavorites)

    let token = window.localStorage.getItem('usertoken')
    let project = useSelector((state) => state.projectById)



    return (
        <div key={id} className="card-home" >

            <div className='card-div-user'>
                <Link to={"/user/" + userId} className="username-card">
                    <div className="card-user">{user && user.toUpperCase()}</div>
                </Link>
                <div className="card-img">
                    <Link to={"/project/" + id}>
                        {imagen.length > 0 ?
                            <img className='img-project-card' src={imagen[0]} alt='imagen proyecto'></img>
                            :
                            <img src={defaultImg[0]} alt='imagen proyecto'></img>
                        }
                    </Link>
                    <div className='fecha-card'>{

                    }
                        {getDateTime(update) - getDateTime(fecha) < 100 ? <p>Creado el: {formatDate(fecha)}</p> : <p>Editado el: {formatDate(update)}</p>}
                    </div>
                </div>
            </div>


            <div className='card-div-info'>
                <div className='corazon-card'>
                    {!listUserFavorites.find(favorito => favorito.projects[0].id === project.id) ?
                        <>
                            <span className='tooltipCard'> {token ? "Agregar a Favoritos" : "Inicia sesion para agregar a favoritos"} </span>
                            <button className='corazon' onClick={addFavorites(userId, project.id)}> <MdFavoriteBorder /></button>
                        </> :
                        <>
                            <span className='tooltipCard'>Borrar de Favoritos</span>
                            <button className='corazon' onClick={() => deleteFavorite({ userId, projectId: project.id })}> <MdFavorite /></button>
                        </>
                    }
                </div>
                <div className='card-info-texto'>
                    <Link to={"/project/" + id} className="title-card">
                        <p className="text-title-card">{name}</p>
                    </Link>
                    <p className="text-body-card">{description}</p>
                    {technology
                    ? <p className='text-technologies-card'>| {technology.map((t) => t + ' | ')}</p>
                    : null 
                    };
                    <p className='text-score-card'>Puntaje total: {score && Number(score).toFixed(2)}</p>
                    <Link to={"/project/" + id}>
                        <button className='card-button-home'>Ver mas</button>
                    </Link>

                </div>
            </div>



        </div>
    )
}

export default Card