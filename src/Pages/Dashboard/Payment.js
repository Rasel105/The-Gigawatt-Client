import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div className='pt-24'>

        </div>
    );
};

export default Payment;