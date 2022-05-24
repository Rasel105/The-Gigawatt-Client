import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ product }) => {
    const { _id, product_name, description, img, min_order_quantity, price, available_quantity } = product;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-48 mt-5' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{product_name}</h2>
                <p>{description.slice(0, 120)}</p>
                <h2 className='text-xl'>Mininum order Quantity: {min_order_quantity}/pcs</h2>
                <h2 className='text-xl'>Available Quantity: {available_quantity}/pcs</h2>
                <h2 className='text-xl'>Price: ${price}</h2>
                <div class="card-actions justify-end">
                    <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;