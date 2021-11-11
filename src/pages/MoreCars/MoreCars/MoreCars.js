import React from 'react';
// import './Cars.css';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import MoreCar from '../MoreCar/MoreCar';


const MoreCars = () => {
    const [products, setProducts] = useState([]);

    const banner = 'https://www.aboudcar.com/wp-content/uploads/2017/10/GAC_Hyundai-Banner-.jpg';

    const bg = {
        width: '100%',
    }

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <div>
                <img style={bg} src={banner} alt="" />
                <Container>
                    <h1 style={{ marginTop: '-40px', color: 'tomato' }}> COMMING SOON ... </h1>
                </Container>
            </div>
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