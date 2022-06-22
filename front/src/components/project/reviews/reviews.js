import React, { Fragment } from 'react';
import ReactStars from "react-rating-stars-component";
import { ImStarEmpty, ImStarHalf, ImStarFull } from "react-icons/im";
import "./reviews.css"

const Reviews = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <Fragment>
            <hr></hr>
            <form className='form-review'>
                <div className='cont-estrellas'>

                    <div>Diseño:<ReactStars
                        count={5}
                        isHalf={true}
                        onChange={ratingChanged}
                        emptyIcon={ImStarEmpty}
                        halfIcon={ImStarHalf}
                        fullIcon={ImStarFull}
                        size={28}
                        activeColor="#ffd700" /></div>
                    <div>Funcionalidad:<ReactStars
                        count={5}
                        isHalf={true}
                        onChange={ratingChanged}
                        emptyIcon={ImStarEmpty}
                        halfIcon={ImStarHalf}
                        fullIcon={ImStarFull}
                        size={28}
                        activeColor="#ffd700" /></div>
                    <div>Originalidad: <ReactStars
                        count={5}
                        isHalf={true}
                        onChange={ratingChanged}
                        emptyIcon={ImStarEmpty}
                        halfIcon={ImStarHalf}
                        fullIcon={ImStarFull}
                        size={28}
                        activeColor="#ffd700" /></div>
                </div>
                <textarea className='review-text-area' />
                <button>Enviar</button>
            </form>
        </Fragment>);
}

export default Reviews;