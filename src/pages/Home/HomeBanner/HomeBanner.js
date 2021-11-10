import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg';
import slide2 from '../../../images/slide2.jpg';
import slide3 from '../../../images/slide3.jpg';
import slide4 from '../../../images/slide4.jpg';

const HomeBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>FINANCE PACKAGES</h3>
                    <p>TAILORED TO YOUR REQUIREMENTS</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>WARRANTY</h3>
                    <p>ON ALL OUR VEHICLES</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>VEHICLE SOURCING</h3>
                    <p>WE'LL FIND THE VEHICLE YOU WANT</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide4}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>SPECIALISTS</h3>
                    <p>FROM SPORTS TO LUXURY VEHICLES</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;