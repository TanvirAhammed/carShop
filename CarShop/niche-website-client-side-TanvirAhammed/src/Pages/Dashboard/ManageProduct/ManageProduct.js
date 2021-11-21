import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './ManageProduct.css'

const ManageProduct = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('https://whispering-tundra-99091.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setproducts(data))
    })
    const handleDelete = id => {
        const url = `https://whispering-tundra-99091.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Deleted Successfully')
                    const remaining = products.filter(product => product._id !== id)
                    setproducts(remaining);
                }


            })

    }
    return (

        <div>
            <Typography sx={{ ml: 10, pb: 10 }} variant='h4'>
                Manage products

            </Typography>

            <div className="manage-container pb-5">

                {
                    products.map(product => <div key={product._id}>


                        <img className='images_width' src={product.img} alt="" /><br /><br />
                        <Typography sx={{ ml: 11, mt: -2 }} variant='h6'>
                            {product.name}
                        </Typography>
                        <Button sx={{ ml: 9 }} variant="outlined" color="error" className='btn-style' onClick={() => handleDelete(product._id)}>Delete</Button>



                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;