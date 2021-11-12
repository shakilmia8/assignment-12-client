import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MoreCar = ({ product }) => {
    const { _id, name, price, launched, describe, img } = product;

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
                    <Link to={`/carDetails/${_id}`}><Button variant='dark'>Buy Now</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default MoreCar;