import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Cars from '../Cars/Cars';
import Reviews from '../Reviews/Reviews';
import Factory from '../Factory/Factory';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Cars></Cars>
            <Reviews></Reviews>
            <Factory></Factory>
            <Footer></Footer>
        </div>
    );
};

export default Home;