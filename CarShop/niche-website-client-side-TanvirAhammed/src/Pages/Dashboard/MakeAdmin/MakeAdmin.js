import { Alert, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import admin from '../../../Images/admin.jpg'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();



    const handleOnBlur = e => {
        setEmail(e.target.value)
        e.preventDefault();
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://whispering-tundra-99091.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }

            })


    }
    return (

        <Container>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <h3>Make Admin</h3>

                    <form onSubmit={handleAdminSubmit}>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <br />
                        <br />
                        <br />
                        <br />
                        <Button type="submit" variant='contained'>Make Admin</Button>

                        {success && <Alert severity="success">Made Admin Successfully!</Alert>}
                    </form>

                </Grid>
                <Grid item xs={12} sm={6} >
                    <img style={{ borderRadius: '60px' }} src={admin} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default MakeAdmin;