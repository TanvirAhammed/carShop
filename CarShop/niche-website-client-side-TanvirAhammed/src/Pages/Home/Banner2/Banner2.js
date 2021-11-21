import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import car from '../../../Images/car.png';
import bg from '../../../Images/bg.jpg';
import { Button, Container, Typography } from '@mui/material';
import { color } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: '100% 100%'


}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',

    height: '400px'



}

const Banner2 = () => {
    return (
        <Box style={bannerBg} >
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Container>
                        <Typography sx={{ mb: 5, color: 'white' }} variant='h3'>
                            Step inside  <br />
                            comfort zone.
                        </Typography>
                        <Typography sx={{ mb: 5, color: 'white' }} variant='h5'>
                            No haggle, no pressure

                        </Typography>

                        <Typography sx={{ mb: 5, color: 'white' }} variant='p'>
                            We post our lowest price on the <br />
                            window of every vehicle.
                        </Typography>




                    </Container>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{ width: '100%', marginTop: '-400px' }} src={car} alt="" />
                </Grid>

            </Grid>


        </Box>


    );
};

export default Banner2;