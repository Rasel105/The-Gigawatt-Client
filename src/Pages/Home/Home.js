import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BussinessSummary from './BussinessSummary';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner />
            <Tools />
            <BussinessSummary />
            <Footer />
            
        </div>
    );
};

export default Home;