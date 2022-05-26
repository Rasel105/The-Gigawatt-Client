import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;

    return (
        <>
            <div className='flex justify-around'>
                <h1 className='text-3xl mb-2 text-center'>My Profile</h1>
                <button className='btn btn-accent text-white'>Update Profile</button>
            </div>
            <div className='grid lg:grid-cols-1 sm:grid-cols-1 sm:p-6'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Education</th>
                                <th>City</th>
                                <th>Linkedin</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td>{email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyProfile;