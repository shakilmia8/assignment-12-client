import React from 'react';
import './AboutUs.css';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const AboutUs = () => {
    const aboutBanner = 'https://media.smallbiztrends.com/2019/04/About-Us.png';
    return (
        <>
            <Navigation></Navigation>
            <div className='about-container'>
                <img src={aboutBanner} alt="" />
                <div className='about'>
                    <h2>Our Mission</h2>
                    <p>We, once again, used the 2.0-kilometre short loop that consists primarily of the back half of the circuit. This eliminates the main straight and the 1.2-kilometre back straight – so, in a sense, it neutralises the straight-line speed advantage of the most powerful machines. But, that’s fine, since our objective is to use the lap time to get an objective marker for overall performance.

                        A track map points out the section of track that we utilise – the red line depicts the loop for the four-wheel vehicles, while the blue depicts the two-wheel loop, the only difference being that the bikes and scooters used the inside / bike loop of the parabolica at turns 10, 11 and 12. Lap times are monitored by the timing system at the BIC. Each vehicle is fitted with a transponder to ensure that all lap times are accurate to the hundredth of a second.</p>

                    <h2>History of This year</h2>
                    <p>This year might not have filled our hearts with joy, but before it ended, we had an important thing to do – identify the best cars and bikes of the year 2021. So, we lined up over 40 contenders at the Buddh International Circuit in Greater Noida. As always, the latest cars and bikes from 2021 slugged it out to win the ‘Best of 2021’ award, but only the top-10 are crowned. The testing is conducted at the BIC, because it offers a controlled environment to test these cars and bikes. Apart from a lap time – which is an overall marker for a vehicle’s dynamic performance – the jurors give equal weightage to factors such as comfort, quality, design, practicality and value-for-money. Every contender is evaluated on a level playing field in the most objective and transparent way possible.</p>

                    <h2>Our Motivation</h2>
                    <p>Over a three-day period, our experienced team of road testers drove, rode & tested all the 40 contenders at India's only F1 racing circuit. Each machine was then scored out of a total score of 100 for quality, practicality, drivetrain, design, value-for-money, ride-and-handling, and much more.

                        The Best of 2020 title is awarded to just six four-wheelers and four two-wheelers, including the Performance Car & Performance Bike of the year awards. After an extensive & adrenaline-fuelled jury round, we present the ‘Best of 2020’ awards to the worthy recipients.

                    </p>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;