import React, { useEffect } from 'react'
import './card.css'
import defaultImg from './signup-image.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdFavorite, MdError, MdFavoriteBorder } from "react-icons/md";
import { addFavorites, deleteFavorite, getFavorites } from '../../../redux/actions/actionCreators';
import { formatDate, getDateTime } from '../../../functions';


function Card({ id, name, description, fecha, imagen, userId, score, update, user, technology }) {

    let listUserFavorites = useSelector((state) => state.listFavorites)
    let dispatch = useDispatch()
    let token = window.localStorage.getItem('usertoken')
    let idUser = window.localStorage.getItem('userid')
    //let project = useSelector((state) => state.projectById)


    async function AñadirFavorite() {
        await addFavorites(idUser, id)
        dispatch(getFavorites({ idUser }))

    }
    async function EliminarFavorite() {
        await deleteFavorite(idUser, id)
        dispatch(getFavorites({ idUser }))
    }

    return (
        <div key={id} className="card-home" >

            <div className='card-div-user'>
                <Link to={"/user/" + userId} className="username-card">
                    <div className="card-user">{user && user.toUpperCase()}</div>
                </Link>
                <div className="card-img">

                    {imagen.length > 0 ?
                        imagen[0].includes(".mp4") ?
                            <video className='img-project-card' autoPlay={true} src={imagen[0]} />
                            :
                            <img className='img-project-card' src={imagen[0]} alt='imagen proyecto'></img>
                        :
                        <img src={defaultImg[0]} alt='imagen proyecto'></img>

                    }

                    <div className='fecha-card'>{

                    }
                        {getDateTime(update) - getDateTime(fecha) < 100 ? <p>Creado el: {formatDate(fecha)}</p> : <p>Editado el: {formatDate(update)}</p>}
                    </div>
                </div>
            </div>


            <div className='card-div-info'>
                <div className='corazon-card'>
                    {
                        !listUserFavorites.projects?.find(p => p.id === id) ?
                            !listUserFavorites.favorites?.find(favorito => favorito.projects[0]?.id === id) ?
                                <>
                                    <span className='tooltipCard'>{token ? "Agregar a Favoritos" : "logeate para agregar a favoritos"}</span>
                                    <button className='corazon' onClick={() => { return token ? AñadirFavorite() : null }}> <MdFavoriteBorder /></button>
                                </> :
                                <>
                                    <>
                                        <span className='tooltipCard'>Borrar de Favoritos</span>
                                        <button className='corazon' onClick={() => EliminarFavorite()}> <MdFavorite /></button>
                                    </>
                                </> : null
                    }
                </div>
                {/* <div className='card-info-texto'> */}
                <Link to={"/project/" + id} className="title-card">
                    <p className="text-title-card">{name}</p>
                </Link>
                <p className="text-body-card">{description}</p>
                {technology
                    ? <p className='text-technologies-card'>{technology.map((t) => <span className='technologie-card'>{t}</span>)}</p>
                    : null
                };
                <p className='text-score-card'>Puntaje total: {score && Number(score).toFixed(2)}</p>
                <Link to={"/project/" + id}>
                    <button className='card-button-home'>Ver mas</button>
                </Link>

                {/* </div> */}
            </div>

        </div>
    )
}

export default Card