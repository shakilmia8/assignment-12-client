import React from 'react';
import './Review.css';
import { Col, Card } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Review = ({ review }) => {
    const { name, rating, img, describe } = review;
    return (
        <Col>
            <Card>
                <Card.Img className='review-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                    </Stack>
                    <Card.Text>
                        {describe.slice(0, 300)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;