import React, { useEffect, useState } from 'react';
import Product from "../Product/Product"
import './Products.css'



const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-tundra-99091.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                const sliceData = data.slice(0, 6)
                setProducts(sliceData)
            }

            );
    }, [])

    return (

        <div id="services" className='container  pb'>
            <h2 className="text-primary mt-5">Our Products</h2>
            <div className="service-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </div>
        </div>

    );
};

export default Products;