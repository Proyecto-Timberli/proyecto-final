import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import "./reviews.css";
import { useDispatch, useSelector } from "react-redux";
import { getProjectById, postReview } from '../../../redux/actions/actionCreators';
import ReviewsCard from "./reviewsCard/reviewsCard"


const Reviews = ({ projectid, reviews, idUser }) => {
    const userId = useSelector(store => store.loggedUserId)
    let dispatch = useDispatch()
    console.log(projectid)

    const [input, setInput] = useState({
        text: "",
        scoreStyle: 1,
        scoreFunctionality: 1,
        scoreOriginality: 1
    })
    const [error, setError] = useState({
        text: "",
        scoreStyle: "",
        scoreFunctionality: "",
        scoreOriginality: ""
    })


    function funcionValidacion(form) {
        let errors = {}

        if (!form.text) {
            errors.text = "Escriba una reseña"
        } else if (form.text.length > 400) {

            errors.text = 'No excedas los 400 caracteres'
        }
        // else if (!/^[a-z ,.'-]+$/i.test(formData.name)){
        //     errors.text = '*No puede contener simbolos'
        // } 

        if (form.scoreStyle < 0.5 || form.scoreStyle > 5) {
            errors.scoreStyle = "Ingrese un valor entre 0.5 y 5"
        }
        if (form.scoreFunctionality < 0.5 || form.scoreFunctionality > 5) {
            errors.scoreFunctionality = "Ingrese un valor entre 0.5 y 5"
        }
        if (form.scoreOriginality < 0.5 || form.scoreOriginality > 5) {
            errors.scoreOriginality = "Ingrese un valor entre 0.5 y 5"
        }
        return errors
    }


    const ratingChanged = (e, names) => {

        setInput({
            ...input,
            [names]: e
        })

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
        let errores = funcionValidacion(input)
        setError(errores)

        if (Object.keys(errores).length !== 0) {
            return
        }
        //////////////////////
        dispatch(postReview(input, userId, projectid))
        dispatch(getProjectById(projectid))

    }


    function pregunta() {
        let valor = false

        reviews.map(e => {
            if (Number(e.userId) === Number(userId)) return valor = true
        })
        return valor
    }
    
let arrayAMostrar = [...reviews].reverse()

    return (
        (userId ? <div className='reviews-general'>
            <hr></hr>

            {userId != idUser ?
            <div>
            
                {pregunta() ? <div>Ya le diste una Review a este proyecto. Muchas gracias! </div> :
                    <form className='form-review' onSubmit={e => onSubmit(e)}>
                        <div className='cont-estrellas'>
                            <div>Diseño:<ReactStars
                                count={5}
                                value={input.scoreStyle}
                                name={"scoreStyle"}
                                colorz
                                isHalf={true}
                                onChange={e => ratingChanged(e, "scoreStyle")}
                                size={28}
                                activeColor="#ffd700" />
                                {error.scoreStyle && error.scoreStyle.length !== 0 ? <div>{error.scoreStyle}</div> : null}

                            </div>
                            <div>Funcionalidad:<ReactStars
                                count={5}
                                value={input.scoreFunctionality}
                                name={"scoreFunctionality"}

                                isHalf={true}
                                onChange={e => ratingChanged(e, "scoreFunctionality")}

                                size={28}
                                activeColor="#ffd700" />
                                {error.scoreFunctionality && error.scoreFunctionality.length !== 0 ? <div>{error.scoreFunctionality}</div> : null}

                            </div>
                            <div>Originalidad: <ReactStars
                                count={5}
                                value={input.scoreOriginality}
                                name={"scoreOriginality"}
                                isHalf={true}
                                onChange={e => ratingChanged(e, "scoreOriginality")}

                                size={28}
                                activeColor="#ffd700" />
                                {error.scoreOriginality && error.scoreOriginality.length !== 0 ? <div>{error.scoreOriginality}</div> : null}

                            </div>
                        </div>
                        <textarea name='text' value={input.text} onChange={e => onChange(e)} className='review-text-area' />
                        {error.text && error.text.length !== 0 ? <div>{error.text}</div> : null}

                        <button className='btn-send-reviews'>{`>`}</button>
                    </form>}
                    </div>
            : null }  

                {reviews.length > 0 ? arrayAMostrar.map(e => 
                <ReviewsCard key={e.id}
                    user={e.user}
                    text={e.text}
                    fecha={e.createdAt}
                    scoreFunctionality={e.scoreFunctionality}
                    scoreOriginality={e.scoreOriginality}
                    scoreStyle={e.scoreStyle} />)
                : <h4 className='no-reviews'>Este proyecto aun no tiene Reviews</h4>}

        </div> : <h4 className='no-reviews'>Para dejar tu review, inicia sesion!</h4>)
    );
}

export default Reviews;