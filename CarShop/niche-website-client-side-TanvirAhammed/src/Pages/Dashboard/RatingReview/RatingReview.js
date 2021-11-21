import React, { useEffect, useState } from 'react';

import Navigation from '../../Shared/Navigation/Navigation';
import RatingSingle from '../RatingSingle/RatingSingle';
import Rating_single from '../RatingSingle/RatingSingle';
import './Rating.css'



const RatingReview = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-tundra-99091.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (



        <div className='container pt-5 '>


            <div className="service-container">
                {

                    products.map(product => <RatingSingle
                        key={product.id}
                        product={product}
                    ></RatingSingle>)
                }

            </div>
        </div>


    );
};

export default RatingReview;