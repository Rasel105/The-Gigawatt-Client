import React, { useEffect, useState } from 'react';

const Testimonials = () => {
    const [testimonials, setTestimonial] = useState([]);
    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => {
                setTestimonial(data);
            })
    }, [])
    return (
        <>
            <h2 className='text-primary pl-16 text-xl mt-10'>Testimonials</h2>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5 justify-items-center self-center px-14 my-20'>
                <div className=''>
                    <h2 className='text-5xl mb-2'>Some talk of</h2>
                    <h2 className='text-5xl'><span className='text-primary'>honorable</span> clients</h2>
                </div>
                <div>
                    <div id="item1" className="grid lg:grid-cols-3 sm:grid-cols-1 gap-5 rounded-lg">
                        {
                            testimonials.map(testimonial => <div
                                key ={testimonial._id} className='rounded shadow-lg p-5'>
                                <div className='flex justify-center items-center mb-3'>
                                    <img className='rounded-full h-1/3 w-16' src={testimonial.img} alt="" />
                                    <h1 className='mx-5 text-primary'>{testimonial.name}</h1>
                                </div>
                                <p>{testimonial.description.slice(0, 125)}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;