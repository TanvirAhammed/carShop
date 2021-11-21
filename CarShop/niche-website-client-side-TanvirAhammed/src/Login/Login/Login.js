import React, { useState } from 'react';

import Grid from '@mui/material/Grid';
import { Alert, Button, CircularProgress, Container, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import login from '../../Images/login.png'
import useAuth from '../../hooks/useAuth';
import Navigation from '../../Pages/Shared/Navigation/Navigation';
import { Box } from '@mui/system';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, SignInGoogle } = useAuth();
    const [passwordShown, setPasswordShown] = useState(false);
    // const element = <FontAwesomeIcon icon={faEyeSlash} />

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };

    const handleGoogleSignIn = () => {
        SignInGoogle(location, history)
    }
    return (




        <Box>
            < Navigation ></Navigation >
            <Grid container spacing={2}>
                <Grid sx={{ mt: 8, }} item xs={12} md={6}>
                    <Typography variant='h4' >
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="User Email"
                            name='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            name='password'
                            onChange={handleOnChange}
                            type={passwordShown ? "text" : "password"}
                            variant="standard"

                        />


                        {/* <Button style={{ paddingRight: '200px' }} onClick={togglePassword}>{element}</Button> */}

                        <Button type='submit' sx={{ width: '75%', m: 1 }} variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant='text'>New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login Successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <p>---------------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant='contained'>Google SignIn</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%', paddingTop: '100px' }} src={login} alt="" />
                </Grid>

            </Grid>
        </Box>
    );
};

export default Login;














