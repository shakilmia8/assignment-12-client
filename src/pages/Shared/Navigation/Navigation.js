import React from 'react';
import './Navigation.css';
import logo from '../../../images/logo.png'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();

    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <img height="60px" src={logo} alt="" />
                    <Navbar.Brand className='t-color' as={Link} to="/home">Automotor</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link className='t-color' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='t-color' as={Link} to="/about">AboutUs</Nav.Link>
                        <Nav.Link className='t-color' as={Link} to="/contact">ContactUs</Nav.Link>
                        {
                            user.email ? <Button onClick={logOut} variant='dark'>Log Out</Button> : <Nav.Link className='t-color' as={Link} to="/Login">login</Nav.Link>
                        }

                        <Navbar.Text className='t-color'>
                            <span className='t-color'>
                                Signed in as:{user.email && <span>{user.displayName}</span>}
                            </span>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;