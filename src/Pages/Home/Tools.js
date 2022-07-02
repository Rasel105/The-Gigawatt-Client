import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://the-gigawatt.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-center text-5xl text-primary my-5 underline'>Tools</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 justify-center'>
                {
                    products.map(product => <Tool
                        key={product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;