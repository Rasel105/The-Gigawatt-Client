import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyprofileUpdate = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user?.email;

    const onSubmit = (data, e) => {
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                toast.success(`Profile update successfully`);
                e.target.reset();
                console.log('Success:', data);
            })
    }
    return (
        <div>
            <h2 className='text-center text-xl mb-2'>Update Profile</h2>
            <div className='border-2 sm:p-2 sm:w-full lg:w-2/5 mx-auto bg-slate-200 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-white rounded p-5">
                    <label className="block mb-2 text-sm font-bold text-gray-700">Education</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Education" type="text"  {...register("education", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">City/District</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="City / District" type="text"  {...register("city", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Phone</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="Phone" type="number"  {...register("phone", { required: true })} />
                    <label className="block mb-2 text-sm font-bold text-gray-700">Linkedin</label>
                    <input className='mb-2 py-2 px-2 text-lg shadow-lg text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-outline ' placeholder="LinkedIn profile link" type="text"  {...register("linkedin", { required: true })} />
                    <div className='flex justify-end'>
                        <button className='btn btn-primary mt-2' type='submit'>
                            Update
                        </button>
                    </div>
                </form>
            </div >
        </div>
    );
};

export default MyprofileUpdate;