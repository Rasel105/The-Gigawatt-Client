import React, { useEffect, useState } from 'react';
import RubberBand from 'react-reveal/RubberBand';

const OurDealers = () => {
    const [dealers, setDealers] = useState([]);
    useEffect(() => {
        fetch(`https://thawing-everglades-09724.herokuapp.com/dealers`)
            .then(res => res.json())
            .then(data => setDealers(data));
    }, [])
    return (
        <div>
            <h2 className='text-center text-5xl mb-3'>Our <span className='text-sky-500'>Dealers</span></h2>
            <div className='container w-full mx-auto grid gap-5 md:grid-cols-4 sm:grid-cols-1 bg-slate-100 p-8 rounded'>
                {
                    dealers.map(dealer =>
                        <RubberBand key={dealer._id}>
                            <div className='w-full mx-auto items-center justify-evenly flex justify-c bg-white rounded-lg py-5 px-2'>
                                <img className='w-20 h-20 rounded' src={dealer.img} alt="" />
                                <div className='ml-5'>
                                    <h3 className='text-xl'>{dealer.dealer}</h3>
                                    <h3 className='text-sm'>{dealer.Address}</h3>
                                </div>
                            </div>
                        </RubberBand>
                    )
                }
            </div>
        </div>
    );
};

export default OurDealers;