import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    // console.log(users);

    return (
        <>
            <h2 className='pt-25 text-2xl text-center'>Make Admin</h2>
            {/* <h2 className='text-2xl text-center'>User: {users.length}</h2> */}
            <div className='grid'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((user, index) => <UserRow
                                    key={user._id}
                                    refetch={refetch}
                                    index={index}
                                    user={user} />)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default MakeAdmin;