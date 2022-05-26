import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Slide from 'react-reveal/Slide';

const MyProfile = () => {
    const [currentUser, setCurrentUser] = useState({});
    const [user] = useAuthState(auth);
    const name = user?.displayName;
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/user-profile/${email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data);
            })
    }, [email])



    return (
        <>
            <div className='flex justify-around'>
                <h1 className='text-3xl mb-2 text-center'>My Profile</h1>
                <Link to="/profileUpdate" className='btn btn-accent text-white'>Update Profile</Link>
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
                            <Slide left cascade>
                                <tr>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{currentUser.education}</td>
                                    <td>{currentUser.city}</td>
                                    <td>{currentUser.linkedin}</td>
                                </tr>
                            </Slide>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MyProfile;