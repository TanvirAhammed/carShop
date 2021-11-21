import * as React from 'react';
import Rating from 'react-rating';
import './RatingSingle.css'




const RatingSingle = ({ product }) => {
    console.log(product);
    const { name, price, description, img } = product;


    return (
        <div>
            <div className="rating pb-3 ">
                <img className='img' src={img} alt="" />
                <h3 className="name">{name}</h3>
                <div className='price_books'>
                    <h5>Price: {price}</h5>
                </div>

                <div className='ratingR'>
                    <Rating
                        initialRating='3'
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        readonly

                    ></Rating>
                </div>
            </div>
        </div>





    );
};

export default RatingSingle;