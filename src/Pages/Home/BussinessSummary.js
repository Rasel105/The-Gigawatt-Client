import React from 'react';
import { IoIosPeople } from 'react-icons/io';
import { FaMoneyBillWave, FaTools, FaFlag } from 'react-icons/fa';
import Rotate from 'react-reveal/Rotate';

const BussinessSummary = () => {
    return (
        <Rotate bottom left>
            <div className='mt-28'>
                <h1 className='text-4xl font-bold text-center mb-24 divider'><span className='text-primary'>Business</span> Summary</h1>
                <div className="stats shadow grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-primary">
                            <IoIosPeople />
                        </div>
                        <div className="stat-value text-primary">500+</div>
                        <div className="stat-title text-2xl">Happy Customers</div>
                    </div>

                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-secondary">
                            <FaMoneyBillWave />
                        </div>
                        <div className="stat-value text-secondary">$2.6M</div>
                        <div className="stat-title text-2xl">Annual Revenue</div>
                    </div>

                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-primary">
                            <FaTools />
                        </div>
                        <div className="stat-value text-primary mt-3 mb-3">100+</div>
                        <div className="stat-title text-2xl">Tools/Parts</div>
                    </div>

                    <div className="stat w-25 text-center">
                        <div className="text-6xl m-auto text-secondary">
                            <FaFlag />
                        </div>
                        <div className="stat-value text-secondary mt-3 mb-3">50+</div>
                        <div className="stat-title text-2xl">Countries</div>
                    </div>

                </div>
            </div>
        </Rotate>
    );
};

export default BussinessSummary;