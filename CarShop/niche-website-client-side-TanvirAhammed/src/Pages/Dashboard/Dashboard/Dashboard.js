import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import ManageProduct from '../ManageProduct/ManageProduct';

import MyOrder from '../MyOrder/MyOrder';
import RatingReview from '../RatingReview/RatingReview';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const { user, logout } = useAuth();
    const drawer = (
        <div>
            <Toolbar />
            <Box sx={{ paddingLeft: '30px', marginTop: '-60px' }}>
                Hello Dear, {user.displayName}
                <img style={{ borderRadius: '50%', width: '80px', marginLeft: "20px" }} src={user?.photoURL} alt="" />
            </Box>
            <Divider />
            <br />
            <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '50px', marginTop: '10px' }} to='/home'><Button variant="contained" color="success" style={{ marginTop: '10px' }}   >Home</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '30px' }} to={`${url}/myOrder`}><Button variant="contained" color="success" style={{ marginTop: '10px' }}   >My Orders</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '40px' }} to={`${url}/payment`}><Button variant="contained" color="success" style={{ marginTop: '10px' }}   >Payment</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '30px' }} to={`${url}`}><Button style={{ marginTop: '10px' }} variant="contained" color="success" >Dashboard</Button></Link>
            <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '20px' }} to={`${url}/ratingReview`}><Button style={{ marginTop: '10px' }} variant="contained" color="success" >Rating Review</Button></Link>


            {
                admin && <Box>



                    <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '30px' }} to={`${url}/makeAdmin`}><Button variant="contained" color="success" style={{ marginTop: '10px' }} >Make Admin</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '40px' }} to={`${url}/addProduct`}><Button variant="contained" color="success" style={{ marginTop: '10px' }} >Add Cars</Button></Link>
                    <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '10px' }} to={`${url}/manageProduct`}><Button variant="contained" color="success" style={{ marginTop: '10px' }} >Manage Product</Button></Link>
                </Box>
            }
            <br />
            <Divider />
            <Link style={{ textDecoration: 'none', color: 'white', paddingLeft: '40px' }}>
                <Button onClick={logout} style={{ marginTop: '10px' }} variant="outlined" color="error">Logout</Button>
            </Link>


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/ratingReview`}>
                        <RatingReview></RatingReview>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
