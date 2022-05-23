import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import ProductDetailModal from './ProductDetailModal';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [product, setProducts] = useState({});

    const email = user?.email;
    const userName = user?.displayName;
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [id]);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
            <div className='pt-20 mb-4 flex justify-end px-28'>
                <label for="all-info" class="btn btn-primary modal-button">See Details</label>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-10/12 mx-auto gap-5 '>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product.product_name}</h2>
                        <p>{product.description}</p>
                        <h2 className='text-xl'>Mininum order Quantity: {product.min_order_quantity}</h2>
                        <h2 className='text-xl'>Available Quantity: {product.available_quantity}</h2>
                        <h2 className='text-xl'>Price: {product.price}</h2>
                        <div class="card-actions justify-end">
                            {/* <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link> */}
                        </div>
                    </div>
                </div>
                <div className='border-2 container sm:p-3 sm:w-full lg:w-3/4 mx-auto bg-slate-300 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                        <label className="block mb-2 text-sm font-bold text-gray-700">Your Email</label>
                        <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none bg-gray-200 focus:outline-none focus:shadow-outline' value={email} readOnly {...register("user_email")} />
                        <label className="block mb-2 text-sm font-bold text-gray-700">Your Name</label>
                        <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Product Name' value={userName} readOnly {...register("user_name", { required: true })} />
                        <label className="block mb-2 text-sm font-bold  text-gray-700">Price</label>
                        <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Price' type="number" {...register("price", { required: true })} />
                        <label className="block mb-2 text-sm font-bold text-gray-700">Quntity</label>
                        <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Quntity' type="number" {...register("quantity", { required: true })} />
                        <div className='flex justify-end'>
                            <button className='btn btn-primary mt-2' type='submit'>
                                Purchase
                            </button>
                        </div>
                    </form>
                </div >
                <ProductDetailModal
                    email={email}
                    userName={userName}
                    product={product} />
            </div>
        </>
    );
};

export default Purchase;