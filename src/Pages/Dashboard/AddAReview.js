import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Zoom from 'react-reveal/Zoom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddAReview = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const onSubmit = (data, e) => {
        const ratings = data.ratings;
        const review = data.review;
        if (review.length < 25) {
            return toast.error("Review length must be 25 caracters");
        }
        if (ratings > 5 || 0 > ratings) {
            return toast.error("Rating can't be more than 5 or less than 0");
        }

        const reviewData = {
            ratings: ratings,
            review: review,
            email: email,
        }

        fetch('https://the-gigawatt.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Review added successfully`);
                e.target.reset();
            })
    }
    return (
        <Zoom left>
            <div>
                <h1 className='text-3xl'>Add a review</h1>
                <div className='border-2 container sm:p-3 sm:w-full lg:w-1/2 mx-auto bg-slate-300 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                        <label className="block mb-2 text-sm font-bold text-gray-700">Ratings</label>
                        <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Ratings" type="number"  {...register("ratings", { required: true })} />
                        <label className="block mb-2 text-sm font-bold  text-gray-700">Review</label>
                        <textarea className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder='Type your review' type="text" {...register("review", { required: true })} />
                        <div className='flex justify-end'>
                            <button className='btn btn-primary mt-2' type='submit'>
                                Add
                            </button>
                        </div>
                    </form>
                </div >
            </div>
        </Zoom>
    );
};

export default AddAReview;