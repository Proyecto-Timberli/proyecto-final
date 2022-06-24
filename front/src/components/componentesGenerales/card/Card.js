import React from 'react'
import './card.css'
import defaultImg from './signup-image.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdFavorite, MdError } from "react-icons/md";
import { addFavorites, deleteFavorite } from '../../../redux/actions/actionCreators';

function Card({ id, name, description, imagen, userId, score, user, scoreStyle, scoreFunctionality, scoreOriginality }) {
    // const promedio = 1
    // if (score.length){
    // const arrNumber = score.map((n) => Number(n))
    // const sum = arrNumber.reduce((primerScore, siguienteScore) => primerScore + siguienteScore, 0);
    // const promedio = (sum/score.length).toFixed(2);

    // }
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
                    {imagen.length > 0 ?
                        <img className='img-project-card' src={imagen[0]} alt='imagen proyecto'></img>
                        :
                        <img src={defaultImg[0]} alt='imagen proyecto'></img>

                    }
                </div>
            </div>
            <div className='card-div-info'>


                <Link to={"/project/" + id} className="title-card">
                    <p className="text-title-card">{name}</p>
                </Link>
                <p className="text-body-card">{description}</p>
                <p className='text-score-card'>Puntaje total: {score && Number(score).toFixed(2)}</p>
                <button className='card-button-home'>Ver mas</button>
            </div>
            <div className='corazon-card'>


                {!listUserFavorites.find(favorito => favorito.projects[0].id === project.id) ?
                    <>
                        <span className='tooltipCard'>{token ? "Agregar a Favoritos" : "logeate para agregar a favoritos"}</span>
                        <button className='corazon' onClick={addFavorites(userId, project.id)}> <MdFavorite /></button>
                    </> :
                    <>
                        <span className='tooltipCard'>Borrar de Favoritos</span>
                        <button className='corazon' onClick={() => deleteFavorite({ userId, projectId: project.id })}> <MdFavorite /></button>
                    </>
                }
            </div>

        </div>
    )
}

export default Card