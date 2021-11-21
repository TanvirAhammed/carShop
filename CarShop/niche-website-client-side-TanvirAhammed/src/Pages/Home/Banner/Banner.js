import { Search } from '@mui/icons-material';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import img from '../../../Images/banner.png'



const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: ' 500px',


}
const Banner = () => {
    return (
        <Grid container spacing={2} sx={{ mb: 4, mt: 10 }}>
            <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                <Container sx={{ ml: 10 }}>
                    <Typography sx={{ mb: 5 }} variant='h3'>
                        Best Cars. Best Value.
                    </Typography>
                    <Typography sx={{ mb: 5 }} variant='p'>
                        No other choice makes sense.
                        We make car buying easy, with no-haggle pricing, free home delivery and more!
                    </Typography>




                </Container>
            </Grid>
            <Grid item xs={12} md={6} style={verticalCenter} >
                <img style={{ width: '100%', marginTop: '60px' }} src={img} alt="" />
            </Grid>

        </Grid>
    );
};

export default Banner;