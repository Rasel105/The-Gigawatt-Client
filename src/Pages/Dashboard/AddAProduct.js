import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAProduct = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const onSubmit = (data, e) => {
        const image = data.image[0];
        const formData = new FormData();
        console.log(formData);
        formData.append('image', image);

        const imageStoragekey = 'b2639cc473b6310b9150f37c91feb000';
        const url = `https://api.imgbb.com/1/upload?key=${imageStoragekey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const product = {
                        product_name: data.product_name,
                        email: data.email,
                        price: data.price,
                        img: img,
                        min_order_quantity: data.min_order_quantity,
                        available_quantity: data.available_quantity,
                        description: data.description
                    }


                    fetch('http://localhost:5000/product', {
                        method: "POST",
                        headers: {
                            'content-type': "application/json",
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success("Product added Successfully");
                                e.target.reset();
                            } else {
                                toast.error("Failed to add Product")
                            }
                        })
                }
            })
    }

    return (
        <>
            <h2 className='text-center my-2 text-lg'>Add Product</h2>
            <div className='border-2 sm:p-2 sm:w-full lg:w-2/4 mt-5 mx-auto bg-slate-200 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' disabled defaultValue={email} placeholder="Email" type="email"  {...register("email", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Product Name</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Product Name" type="text"  {...register("product_name", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Price</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Price" type="number"  {...register("price", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Min  Order Quantity</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Min Order Quantity" type="number"  {...register("min_order_quantity", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Available Quantity</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Available Quantity" type="number"  {...register("available_quantity", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Image</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Image" type="file"  {...register("img", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Description</label>
                    <textarea className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Description" type="text"  {...register("description", { required: true })} />
                    <div className='flex justify-end'>
                        <button className='btn btn-primary mt-2' type='submit'>
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddAProduct;