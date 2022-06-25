import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects, getUserById } from '../../../redux/actions/actionCreators'
import { scroll } from "../../../functions";
import Card from '../../componentesGenerales/card/Card';
import "./inicio.css"

const Inicio = () => {
    scroll()

    const userId = useSelector(state => state.loggedUserId)

    let dispatch = useDispatch()
    let user = useSelector((state) => state.userById)

    let cajaArray = []
    if (!!user.favorites) {
        for (let i = 0; i < user.favorites.length; i++) {
            const element = user.favorites[i].projects[0];
            cajaArray.push(element)
        }
    }

    // let favorites = user.favorites.projects
    console.log(user);
    // let arrayAMostrar = allProjects.filter(e => e.favorites.find(b => b.userId === userId) === userId)
    useEffect(() => {
        dispatch(getUserById(userId))
        // dispatch(getAllProjects());
    }, [])

    return (
        <div className='cont-general-inicio'>

            {cajaArray.length !== 0 && cajaArray.map(e => (!!e) && <Card
                description={e.shortDescription}
                key={e.id}
                name={e.name}
                id={e.id}
                user={e.user.name}
                imagen={e.imagen}
                userId={e.userId}
                scoreFunctionality={e.scoreFunctionality}
                scoreOriginality={e.scoreOriginality}
                scoreStyle={e.scoreStyle}
                fecha={e.createdAt}
                update={e.updatedAt}
                score={e.scoreAverage}
            />)}
        </div>
    );
}

export default Inicio;