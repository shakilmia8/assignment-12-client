import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Car = ({ product }) => {
    const { key, name, price, launched, describe, img } = product;

    return (
        <Col>
            <Card className='car-card'>
                <Card.Img className='car-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{ color: 'tomato' }}>{name}</Card.Title>
                    <span>Price: {price}</span>
                    <p>Launched on: {launched}</p>
                    <Card.Text>
                        {describe.slice(0, 200)}
                    </Card.Text>
                    <Link to={`/carDetails/${key}`}><Button variant='dark'>Buy Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;