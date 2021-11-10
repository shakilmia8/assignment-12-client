import React from 'react';
import './Review.css';
import { Col, Card } from 'react-bootstrap';

const Review = ({ review }) => {
    const { name, rating, img, describe } = review;
    return (
        <Col>
            <Card>
                <Card.Img className='review-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <span>Rating: {rating}</span>
                    <Card.Text>
                        {describe.slice(0, 100)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;