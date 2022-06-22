import React, { Fragment, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import "./reviews.css";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from '../../../redux/actions/actionCreators';
import ReviewsCard from "./reviewsCard/reviewsCard"


const Reviews = ({ projectid, reviews, user }) => {
    const userId = useSelector(state => state.loggedUserId)
    let dispatch = useDispatch()

    const [input, setInput] = useState({
        text: "",
        scoreStyle: 1,
        scoreFunctionality: 1,
        scoreOriginality: 1
    })

    const ratingChanged = (e, names) => {

        setInput({
            ...input,
            [names]: e
        })
        console.log(input);
    };
    function onChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    function onSubmit(e) {
        e.preventDefault()
        //validacion errores//

        //////////////////////
        dispatch(postReview(input, userId, projectid))
    }
    return (
        (userId ? <div className='reviews-general'>
            <hr></hr>
            <form className='form-review' onSubmit={e => onSubmit(e)}>
                <div className='cont-estrellas'>

                    <div>Diseño:<ReactStars
                        count={5}
                        value={input.scoreStyle}
                        name={"scoreStyle"}

                        isHalf={true}
                        onChange={e => ratingChanged(e, "scoreStyle")}

                        size={28}
                        activeColor="#ffd700" /></div>
                    <div>Funcionalidad:<ReactStars
                        count={5}
                        value={input.scoreFunctionality}
                        name={"scoreFunctionality"}

                        isHalf={true}
                        onChange={e => ratingChanged(e, "scoreFunctionality")}

                        size={28}
                        activeColor="#ffd700" /></div>
                    <div>Originalidad: <ReactStars
                        count={5}
                        value={input.scoreOriginality}
                        name={"scoreOriginality"}
                        isHalf={true}
                        onChange={e => ratingChanged(e, "scoreOriginality")}

                        size={28}
                        activeColor="#ffd700" /></div>
                </div>
                <textarea name='text' value={input.text} onChange={e => onChange(e)} className='review-text-area' />
                <button>Enviar</button>
            </form>
            {reviews.length > 0 ? reviews.map(e => <ReviewsCard key={e.id}
                user={user}
                text={e.text}
                scoreFunctionality={e.scoreFunctionality}
                scoreOriginality={e.scoreOriginality}
                scoreStyle={e.scoreStyle} />)
                : <div>No hay Reviews, se la primera!</div>}

        </div> : <h4>Logueate para comentar</h4>)
    );
}

export default Reviews;