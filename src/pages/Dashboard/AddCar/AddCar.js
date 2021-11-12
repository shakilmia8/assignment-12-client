import React from 'react';
import { useRef } from 'react';
// import './AddReviews.css';
import { Container } from 'react-bootstrap';

const AddCar = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const launchedRef = useRef();
    const imgRef = useRef();
    const describeRef = useRef();

    const handleAddCar = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const launched = launchedRef.current.value;
        const img = imgRef.current.value;
        const describe = describeRef.current.value;

        const newProduct = { name, price, launched, img, describe };

        fetch('http://localhost:7000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added this products')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <Container>
            <div className='add-reviews'>
                <h2>Please add a Car</h2>
                <form onSubmit={handleAddCar}>
                    <input placeholder='Enter the car model name' type="text" ref={nameRef} /><br />
                    <input placeholder='Enter the car price' type="number" ref={priceRef} /><br />
                    <input placeholder='Enter the launched date' type="text" ref={launchedRef} /><br />
                    <input placeholder='Enter the place imgUrl' type="text" ref={imgRef} /><br />
                    <textarea placeholder='Enter the place describe' name="" id="" cols="30" rows="10" ref={describeRef}></textarea><br />
                    <input type="submit" value="Add One Car" />
                </form>
            </div>
        </Container>
    );
};

export default AddCar;