import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Car = ({ product }) => {
    const { name, price, launched, describe, img } = product;
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
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;