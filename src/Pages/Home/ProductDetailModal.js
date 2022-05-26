import React from 'react';

const ProductDetailModal = ({ product, email, userName }) => {
    const { _id, product_name, description, img, min_order_quantity, price, available_quantity } = product;
    return (
        <div>
            <input type="checkbox" id="all-info" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="all-info" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="card bg-base-100">
                        <div className="card-body">
                            <img className='mt-3 w-4/5' src={img} alt="" />
                            <div className='bg-slate-300 flex flex-col items-center justify-center p-2 rounded-xl shadow-lg'>
                                <h2><span className='text-info text-xl'>Name:</span> {userName}</h2>
                                <h2><span className='text-info text-xl'>Email:</span> {email}</h2>
                            </div>
                            <div className=' rounded-xl'>
                                <h2 className="card-title"><span className='text-info'>Product Name</span> {product_name}</h2>
                                <p><span className='text-info text-xl'>Description:</span> {description}</p>
                                <h2><span className='text-info text-xl'>Minimun Order Quantity:</span> {min_order_quantity}/pcs</h2>
                                <h2><span className='text-info text-xl'>Available Quantity:</span> {available_quantity}/pcs</h2>
                                <h2><span className='text-info text-xl'>Price:</span> {price}/PU</h2>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="all-info" className="btn btn-primary">Okay</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailModal;