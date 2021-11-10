import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import Cars from '../Cars/Cars';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Cars></Cars>
            <Footer></Footer>
        </div>
    );
};

export default Home;