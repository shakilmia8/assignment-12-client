import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Col, Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Shipping from '../Shipping/Shipping';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import './CarDetails.css';

const CarDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        fetch(`/productsDetails.json`)
            .then(res => res.json())
            .then(data => setProduct(data.tree));
    }, [productId])

    useEffect(() => {
        const foundProduct = product.find(p => p.key === productId)
        setSingleProduct(foundProduct);
    }, [product])


    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <div className='details'>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Col>
                                <h2>Welcome is Car Details</h2>
                                <Card className='details-card'>
                                    <Card.Img className='img' variant="top" src={singleProduct?.img} />
                                    <Card.Body>
                                        <Card.Title>{singleProduct?.name}</Card.Title>
                                        <span>Price: {singleProduct?.price}</span>
                                        <p>Launched on: {singleProduct?.launched}</p>
                                        <Card.Text>
                                            {singleProduct?.describe}
                                            <br />
                                            <br />
                                            <Link to={`/moreCars`}>
                                                <Button variant='dark'>See All Cars</Button>
                                            </Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Shipping></Shipping>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default CarDetails;