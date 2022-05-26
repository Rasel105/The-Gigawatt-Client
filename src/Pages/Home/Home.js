import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import OurDealers from './OurDealers';
import Reviews from './Reviews';
import Testimonials from './Testimonials';
import Tools from './Tools';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BussinessSummary />
            <Reviews />
            <OurDealers />
            {/* <Testimonials /> */}
            <WhyChooseUs />
            <Footer />
        </div>
    );
};

export default Home;