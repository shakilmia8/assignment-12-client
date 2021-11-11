import React from 'react';
// import './Cars.css';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import MoreCar from '../MoreCar/MoreCar';


const MoreCars = () => {
    const [products, setProducts] = useState([]);

    const banner = 'https://i.pinimg.com/originals/0e/13/c0/0e13c0a0c04befda2b72c1d5754a2368.jpg';

    const bg = {
        backroundUrl: `url(${banner})`
    }

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <h1 style={bg}>BUY <br />YOUR <br /> CAR </h1>
            <Container className='cars'>
                <h2>New Car Models 2021</h2>
                {
                    <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            products.map(product => <MoreCar key={product.key} product={product}></MoreCar>)
                        ))}
                    </Row>
                }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default MoreCars;