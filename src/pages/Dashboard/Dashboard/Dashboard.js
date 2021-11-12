import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddCar from '../AddCar/AddCar';
import AddReviews from '../AddReviews/AddReviews';
import AllOrders from '../AllOrders/AllOrders';
import ManageAllCars from '../ManageAllCars/ManageAllCars';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Orders from '../Orders/Orders';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 200;



const Dashboard = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    let { path, url } = useRouteMatch();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ color: 'black', textDecoration: 'none' }} to='/home'><Button>Home</Button></Link><br />
            <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}`}><Button>My Orders</Button></Link><br />
            <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/addReviews`}><Button>Add Reviews</Button></Link><br />
            {
                admin && <Box>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/allOrders`}><Button>All Orders</Button></Link><br />
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/manageAllCars`}><Button>Manage All Cars</Button></Link><br />
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/addCar`}><Button>Add Car</Button></Link><br />
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button>Make Admin</Button></Link><br />
                </Box>
            }


        </div>
    );

    return (
        <div>
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
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                        <Typography style={{ marginLeft: '50px' }} variant="h6" noWrap component="div">
                            Signed in as: {user.displayName}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
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
                            <Orders></Orders>
                        </Route>
                        <Route path={`${path}/addReviews`}>
                            <AddReviews></AddReviews>
                        </Route>
                        <AdminRoute path={`${path}/allOrders`}>
                            <AllOrders></AllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageAllCars`}>
                            <ManageAllCars></ManageAllCars>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addCar`}>
                            <AddCar></AddCar>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                    </Switch>
                </Box>
            </Box>

        </div>
    );
};

export default Dashboard;