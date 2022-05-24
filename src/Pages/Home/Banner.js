import React from 'react';
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row mt-20">
                <div>
                    <h1 class="text-5xl font-bold">Goods, Materials, Equipment and Work.</h1>
                    <p class="py-6">Tool kits are every electrician’s trusty companion, you take them with you to every job and rely on the tool to apply your hard-won skills and deliver reliable and safe solutions.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <img src={banner} alt="" class="max-w-md rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;