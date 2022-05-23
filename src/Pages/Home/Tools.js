import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [])
    return (
        <div className='w-11/12 mx-auto my-10'>
            <h2 className='text-center text-5xl text-primary my-5'>Tools</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    products.map(product => <Tool
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Tools;