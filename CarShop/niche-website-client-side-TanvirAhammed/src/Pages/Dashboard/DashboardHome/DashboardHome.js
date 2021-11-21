import * as React from 'react';
import { Button, Grid } from '@mui/material';
import Purchase from '../../Home/Purchase/Purchase';
import MyOrder from '../MyOrder/MyOrder';
import useAuth from '../../../hooks/useAuth';
import dashboard from '../../../Images/dashboad.png'


const DashboardHome = () => {

    const { user, logout } = useAuth();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                Hi, {user.displayName} Welcome to Your DashBoard
            </Grid>
            <Grid item xs={12} sm={7} >
                <img style={{ width: '100%' }} src={dashboard} alt="" />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;