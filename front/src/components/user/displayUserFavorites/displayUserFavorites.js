import React from 'react'
import './displayUserFavorites.css'
import CardFavorites from './CardsForFavorites/CardFavorites'



export default function DisplayUserFavorites({ favorites }) {
    console.log(favorites)
    if (favorites.length === 0) {
        return <h2>No tienes proyectos favoritos agregados actualmente</h2>
    }

    return (
        <div className='userFavoritesContainer'>
            {favorites.map((p) => {
                return (
                    <CardFavorites key={p.projects[0].id} imagen={p.projects[0].imagen[0]} id={p.projects[0].id} name={p.projects[0].name} description={p.projects[0].shortDescription} />
                )
            }) }
        </div>
    )
}
