import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ProductDetailModal from './ProductDetailModal';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const [product, setProducts] = useState({});
    const [btnDisable, setBtnDisabled] = useState(false);

    const email = user?.email;
    const userName = user?.displayName;
    const { id } = useParams();

    useEffect(() => {
        const url = `https://the-gigawatt.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [id, product]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const defaultMinimumOrder = parseInt(product.min_order_quantity);
        const availableQuantity = parseInt(product.available_quantity);
        const price = parseInt(product.price);
        const minimumOrder = parseInt(data.order_quantity);
        const totalPrice = price * minimumOrder;

        const restItem = availableQuantity - minimumOrder;

        const purchaseData = {
            userName: userName,
            email: email,
            item: product.product_name,
            minimumOrder: minimumOrder,
            totalPrice: totalPrice,
            restItem,
            address: data.address,
            phone: data.phone
        }

        if (defaultMinimumOrder > minimumOrder) {
            setBtnDisabled(true);
            return toast.error(`Order can't less than ${defaultMinimumOrder}`);
        }
        else if (minimumOrder >= availableQuantity) {
            setBtnDisabled(true);
            return toast.error(`Your order must be less than ${availableQuantity}`)
        }
        else {
            fetch(`https://the-gigawatt.herokuapp.com/purchase`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(purchaseData),
            })
                .then(res => res.json())
                .then(result => {
                    toast.success(`Your order successfull`);
                    e.target.reset();

                    if (result.insertedId) {
                        const available_quantity = availableQuantity - minimumOrder;

                        fetch(`https://the-gigawatt.herokuapp.com/purchase-update/${id}`, {
                            method: 'PATCH',
                            body: JSON.stringify({ available_quantity }),
                            headers: {
                                'Content-type': 'application/json',
                            },
                        })
                            .then(res => res.json())
                            .then(data => {

                            });
                    }
                })
        }

    };
    return (
        <>
            <div className='pt-20 mb-4 flex justify-end px-28'>
                <label for="all-info" class="btn btn-primary modal-button">See Details</label>
            </div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 w-10/12 mx-auto gap-5 '>
                <div class="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-48 mt-5' src={product.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product.product_name}</h2>
                        <p>{product.description}</p>
                        <h2 className='text-xl'>Mininum order Quantity: {product.min_order_quantity}/pcs</h2>
                        <h2 className='text-xl'>Available Quantity: {product.available_quantity}/pcs</h2>
                        <h2 className='text-xl'>Price: ${product.price}</h2>
                        <div class="card-actions justify-end">
                            {/* <Link to={`/purchase/${_id}`} class="btn btn-primary">Buy Now</Link> */}
                        </div>
                    </div>
                </div>
                <div className='border-2 container sm:p-3 sm:w-full lg:w-3/4 mx-auto bg-slate-300 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                        <label className="block mb-2 text-sm font-bold text-gray-700">Name</label>
                        <input className='mb-1 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' defaultValue={user?.displayName || ""} placeholder="Name"  {...register("quantity", { required: true })} />
                        <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
                        <input className='mb-1 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' defaultValue={user?.email || ""} placeholder="Name"  {...register("email", { required: true })} />
                        <label className="block mb-2 text-sm font-bold  text-gray-700">Address</label>
                        <input className='mb-1 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Address' type="text" {...register("address", { required: true })} />
                        <label className="block mb-2 text-sm font-bold text-gray-700">Phone</label>
                        <input className='mb-1 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Phone' type="number" {...register("phone", { required: true })} />
                        <label className="block mb-2 text-sm font-bold text-gray-700">Min order quantity</label>
                        <input className=' py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' defaultValue={product?.min_order_quantity || ""} placeholder='Minumum order Quantity' type="number" {...register("order_quantity", { required: true })} />

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