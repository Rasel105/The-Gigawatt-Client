import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://the-gigawatt.herokuapp.com/user`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <h2 className='text-2xl text-center mb-2'>Make Admin</h2>
            {/* <h2 className='text-2xl text-center'>User: {users.length}</h2> */}
            <div className="overflow-x-auto">
                <table className="table w-2/4 mx-auto">
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
        </>
    );
};

export default MakeAdmin;