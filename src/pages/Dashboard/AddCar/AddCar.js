import React from 'react';
import { useRef } from 'react';
// import './AddReviews.css';
import { Container } from 'react-bootstrap';

const AddCar = () => {
    const nameRef = useRef();
    const countryRef = useRef();
    const imgRef = useRef();
    const describeRef = useRef();

    const handleAddCar = e => {
        const name = nameRef.current.value;
        const country = countryRef.current.value;
        const img = imgRef.current.value;
        const describe = describeRef.current.value;

        const newService = { name, country, img, describe };

        fetch('https://ghoulish-web-04262.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the service')
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
                    <input placeholder='Enter the place name' type="text" ref={nameRef} /><br />
                    <input placeholder='Enter the place country' type="text" ref={countryRef} /><br />
                    <input placeholder='Enter the place imgUrl' type="text" ref={imgRef} /><br />
                    <textarea placeholder='Enter the place describe' name="" id="" cols="30" rows="10" ref={describeRef}></textarea><br />
                    <input type="submit" value="Add One Car" />
                </form>
            </div>
        </Container>
    );
};

export default AddCar;