import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import WhyChoose from './WhyChoose';

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
        <Zoom left cascade>
            <div>
                <h1 className='text-4xl text-center my-8'>Why Choose <span className='text-primary'>Us?</span></h1>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 justify-items-center items-center'>
                    {
                        whychoose.map(choose => <WhyChoose choose={choose} />)
                    }
                </div>
            </div >
        </Zoom>
    );
};

export default WhyChooseUs;