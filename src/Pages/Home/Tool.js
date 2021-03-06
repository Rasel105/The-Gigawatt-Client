import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

const Tool = ({ product }) => {
    const { _id, product_name, description, img, min_order_quantity, price, available_quantity } = product;
    return (
        <Slide left>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='h-48 mt-5' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_name}</h2>
                    <p>{description.slice(0, 120)}</p>
                    <h2 className='text-lg text-black'>Mininum order quantity: {min_order_quantity}/pcs</h2>
                    <h2 className='text-lg'>Available quantity: {available_quantity}/pcs</h2>
                    <h2 className='text-lg'>Price: ${price}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/purchase/${_id}`} className="btn btn-primary">Buy Now</Link>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Tool;