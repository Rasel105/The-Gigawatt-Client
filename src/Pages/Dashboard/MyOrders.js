import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';
import MyOrderDeleteModal from './MyOrderDeleteModal';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [deletingItem, setDeletingItem] = useState(null)
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    // console.log(deletingItem);

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
    }, [user, navigate, deletingItem])

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
                            <th>Item</th>
                            <th>Order Items</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <MyOrder
                                order={order}
                                setDeletingItem={setDeletingItem}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingItem && <MyOrderDeleteModal
                    deletinItem={deletingItem}
                    setDeletingItem={setDeletingItem}                   
                />
            }
        </div>
    );
};

export default MyOrders;