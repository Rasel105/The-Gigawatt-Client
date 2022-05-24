import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/myorders?email=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                    console.log(data)
                })
        }
    }, [user, navigate])

    if (loading) {
        return <Loading />
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='pt-25 text-center'>My Orders {orders.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Address</th> */}
                            <th>Phone</th>
                            <th>Order Items</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <tr>
                                <th>1</th>
                                <td>{order.userName}</td>
                                <td>{order.email}</td>
                                {/* <td>{order.address}</td> */}
                                <td>{order.phone}</td>
                                <td>{order.minimumOrder}/pcs</td>
                                <td><button className='btn btn-success text-white'>Pay</button></td>
                                <td><button className='btn btn-error text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;