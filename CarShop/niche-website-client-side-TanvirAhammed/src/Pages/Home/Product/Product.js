import * as React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import './Product.css'



const Product = ({ product }) => {

    const { name, price, description, img } = product;


    return (
        <div><Navigation></Navigation>
            <div className="service pb-3 ">
                <img className='images' src={img} alt="" />
                <h3 className="name">{name}</h3>

                <p className="px-3">{description}</p>

                <div className='price_books'>
                    <div>
                        <h5>Price: {price}</h5>
                    </div>

                    <div>
                        <Link to='/dashboard'>
                            <Button>Buy Now</Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>





    );
};

export default Product;