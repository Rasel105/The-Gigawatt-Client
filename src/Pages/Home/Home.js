import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Testimonials from './Testimonials';
import Tools from './Tools';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BussinessSummary />
            <Testimonials />
            <WhyChooseUs />
            <Footer />
        </div>
    );
};

export default Home;