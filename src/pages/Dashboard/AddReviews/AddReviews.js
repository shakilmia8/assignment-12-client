import React from 'react';
import { useRef } from 'react';
import './AddReviews.css';
import { Container } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AddReviews = () => {
    const { token } = useAuth();
    const nameRef = useRef();
    const ratingRef = useRef();
    const imgRef = useRef();
    const describeRef = useRef();

    const handleAddReviews = e => {
        const name = nameRef.current.value;
        const rating = ratingRef.current.value;
        const img = imgRef.current.value;
        const describe = describeRef.current.value;

        const newService = { name, rating, img, describe };

        fetch('https://fierce-fjord-96835.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added your reviews')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <div className='add-reviews'>
                <h2>Your reviews add please</h2>
                <form onSubmit={handleAddReviews}>
                    <input placeholder='Enter your name' type="text" ref={nameRef} /><br />
                    <input placeholder='Enter your rating out of 5' type="number" ref={ratingRef} /><br />
                    <input placeholder='Enter your imgUrl' type="text" ref={imgRef} /><br />
                    <textarea placeholder='Enter your reviews' name="" id="" cols="30" rows="10" ref={describeRef}></textarea><br />
                    <input type="submit" value="Add Your Reviews" />
                </form>
            </div>
        </Container>
    );
};

export default AddReviews;