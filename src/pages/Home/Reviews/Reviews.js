import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fierce-fjord-96835.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container className='cars'>
            <h2>Customer Reviews</h2>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    ))}
                </Row>
            }
        </Container>
    );
};

export default Reviews;