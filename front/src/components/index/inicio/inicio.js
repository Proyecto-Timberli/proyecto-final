import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from '../../../redux/actions/actionCreators'
import { scroll } from "../../../functions";
import Card from '../../componentesGenerales/card/Card';
import "./inicio.css"

const Inicio = () => {
    scroll()

    const userId = useSelector(state => state.loggedUserId)

    let dispatch = useDispatch()
    let allProjects = useSelector((state) => state.allProject)

    // let arrayAMostrar = allProjects.filter(e => e.favorites.find(b => b.userId === userId) === userId)
    useEffect(() => {
        dispatch(getAllProjects());
    }, [])

    return (
        <div className='cont-general-inicio'>

            {allProjects.map(e => (!!e) && <Card
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

                score={e.scoreAverage}
            />)}
        </div>
    );
}

export default Inicio;