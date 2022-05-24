import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Testimonials from './Testimonials';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BussinessSummary />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;