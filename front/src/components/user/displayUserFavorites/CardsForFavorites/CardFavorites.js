import React from 'react'
import { Link } from 'react-router-dom'
import './CardFavorites.css'
import { MdDelete } from 'react-icons/md'
import { deleteFavorite,getUserById } from '../../../../redux/actions/actionCreators'
import { useDispatch } from 'react-redux'

export default function CardFavorites({ id, name, description, imagen }) {
    let userId = window.localStorage.getItem('userid')
    let dispatch= useDispatch()
    
    async function deleteFavoriteProject() {
        await deleteFavorite(userId,id)
        dispatch(getUserById(userId))
    }
            

    return (
        <div className="miniCard" >
            <button className='button' onClick={e=>deleteFavoriteProject()}>
                <MdDelete className='button-delete'></MdDelete>
            </button>
            {imagen.includes(".mp4") ?
            <video className="img-project-card-mini" src={imagen}/>
            :
            <img className="img-project-card-mini" src={imagen || "https://img.freepik.com/vector-gratis/ilustracion-icono-carpeta-datos_53876-6329.jpg?w=360"} alt="project-img"></img>
        }

            <div className="MiniCard-info">
                <p className="MiniCard-title">{name}</p>
                <p className="MiniCard-body">{description}</p>
                <Link to={"/project/" + id} className="MiniCard-button">Ver Proyecto</Link>
            </div>


        </div>
    )
}
