import { Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data);

        axios.post('https://whispering-tundra-99091.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <Typography variant='h4' sx={{ ml: 10 }}>
                Add Car Page
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Please Input The Car Name" />
                <textarea {...register("description")} placeholder="Input Car Description" />
                <input type="number" {...register("price")} placeholder="Inpur Car Price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default AddProduct;