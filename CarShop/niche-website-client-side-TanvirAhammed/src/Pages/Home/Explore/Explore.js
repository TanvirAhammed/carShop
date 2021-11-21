import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Product from '../Product/Product';
import Footer from '../Footer/Footer'


const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-tundra-99091.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <Navigation></Navigation>

            <div className='container pt-5 pl-2'>

                <h2 className="text-primary mt-5">Our Products: {products.length}</h2>
                <div className="service-container">
                    {

                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        ></Product>)
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;