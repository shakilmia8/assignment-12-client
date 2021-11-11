import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Car = ({ product }) => {
    const { name, price, launched, describe, img } = product;
    const history = useHistory();
    const handleShipping = () => {
        history.push('/shipping')
    }
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
                    <Button onClick={handleShipping} variant='dark'>Buy Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Car;