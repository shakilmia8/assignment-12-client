import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from '../Review/Review';


/* const reviews = [
    {
        id: 1,
        name: 'Alex Rodriguez',
        rating: 4,
        img: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F08%2F20%2Farod.jpg',
        describe: "I was test driving all the vehicles in the same class size as the XC60 and I can tell you without a doubt that this is the best option out there. To top it all off, it has the best features, best power in the base engine, best dealership experience, and is well known for being the safest car manufacturer. The fit and finish of every detail in the cabin is at the top of the segment. Lexus does have a little bit more softer door panels and dashes, but as far as the wood trim and fit and finish overall the Volvo is the winner. The cargo room is a little bit down on size compared to some of its competitors but it’s great usable space."
    },
    {
        id: 2,
        name: 'Niloy Sharma',
        rating: 4,
        img: 'https://i2.ytimg.com/vi/T7065bneZbc/maxresdefault.jpg',
        describe: "Worth budget car with higher safety rating and overall all road preferred??. Yes, the engine may lack but those minutes 2-3 secs doesn't bring a major difference. Hight safety, top-notch clearance, mini harrier looks, off-roader, superb mileage, decent price. Better than low safety Maruti and Hyundai cars. Made in India 🇮🇳 vocal for local. Top-notch clearance, mini harrier looks, off-roader, superb mileage, decent price. Better than low safety Maruti and Hyundai cars. Made in India 🇮🇳 vocal for local"
    },
    {
        id: 3,
        name: 'Sohasini Ray',
        rating: 5,
        img: 'https://image.freepik.com/free-photo/beautiful-female-women-driver-sitting-her-vehicle-holding-car-keys-ready-drive_342744-684.jpg',
        describe: "Not as massive looks like XUV500. Made for family people. It will be better if 6 seaters like Innova. But it will rule Indian road. More power engine. If interiors in dark shade Maybe look more comfortable. More white colors materials were used. The top-end model will be more options features and comfort.Not as massive looks like XUV500. Made for family people. It will be better if 6 seaters like Innova. But it will rule Indian road. More power engine. If interiors in dark shade Maybe look more comfortable. More white colors materials were used. The top-end model will be more options features and comfort."
    },
] */


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container className='cars'>
            <h2>Customer Reviews</h2>
            {
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    ))}
                </Row>
            }
        </Container>
    );
};

export default Reviews;