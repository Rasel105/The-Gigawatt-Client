import React, { useEffect, useState } from 'react';

const WhyChooseUs = () => {
    const [whychoose, setWhyChoose] = useState([]);
    useEffect(() => {
        fetch(`whychooseus.json`)
            .then(res => res.json())
            .then(data => {
                setWhyChoose(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center my-8'>Why Choose <span className='text-primary'>Us?</span></h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center items-center'>
                {
                    whychoose.map(choose => <div
                        key={choose._id}
                        className='p-10 shadow-lg my-10'>
                        <img className='w-20 rounded mx-auto' src={choose.img} alt="" />
                        <h1 className='text-3xl mt-2'>{choose.name}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;