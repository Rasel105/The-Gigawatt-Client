import React from 'react';

const WhyChoose = ({ choose }) => {
    return (
        <div
            key={choose._id}
            className='p-10 shadow-lg my-10'>
            <img className='w-20 rounded mx-auto' src={choose.img} alt="" />
            <h1 className='text-3xl mt-2'>{choose.name}</h1>
        </div>
    );
};

export default WhyChoose;