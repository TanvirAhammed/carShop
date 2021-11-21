import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {

    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CarShop
                    </Typography>
                    <Link to='/explore'><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit" >Explore</Button></Link>
                    <Link to='/home'><Button style={{ textDecoration: 'none', color: 'white' }} color="inherit" >Home</Button></Link>
                    {
                        user?.email ?

                            <Box>

                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'> <Button color="inherit">Dashboard</Button></NavLink>
                                <Button style={{ paddingRight: "10px" }} onClick={logout} variant="outlined" color="error">Logout</Button>
                                <img style={{ borderRadius: '50%', width: '60px', marginLeft: "20px" }} src={user?.photoURL} alt="" />
                            </Box>

                            :

                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'> <Button color="inherit">Login</Button></NavLink>
                    }

                </Toolbar>


            </AppBar>
        </Box>
    );
};

export default Navigation;















// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';


// const Navigation = () => {


//     const { user, logout } = useAuth();
//     return (
//         <Box sx={{ flexGrow: 1 }} >
//             <AppBar position="fixed" color='default' >
//                 <Toolbar >
//                     <IconButton
//                         size="large"
//                         edge="start"


//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         News
//                     </Typography>
//                     {
//                         user?.email ?


//                             <Button onClick={logout} color='inherit'>Logout</Button>

//                             :
//                             <NavLink style={{ textDecoration: 'none' }} to='/login'>
//                                 <Button color='inherit'>Login</Button>
//                             </NavLink>
//                     }
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// };

// export default Navigation;