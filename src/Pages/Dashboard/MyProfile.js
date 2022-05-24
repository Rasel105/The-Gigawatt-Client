import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: users, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/users?email=${user.email}`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    console.log(users)
    return (
        <>
            <h2 className='pt-25 text-2xl text-center'>My profile</h2>
            <h2 className='text-2xl text-center'>User: {users.length}</h2>
            <div className='grid'>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(user => <tr>
                                    <th>1</th>
                                    <td>{user.email}</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default MyProfile;