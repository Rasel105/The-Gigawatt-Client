import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllOrderDelete from './ManageAllOrderDelete';
import ManageAllOrderRow from './ManageAllOrderRow';

const ManageAllOrders = () => {
    const [deletingItem, setDeletingItem] = useState(null)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders`, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }
    console.log(orders)
    return (
        <div>
            <h2 className='text-center text-2xl mb-2'>Manage All Products</h2>
            <div class="overflow-x-auto px-4">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Ordered Item</th>
                            <th>Order Quantity</th>
                            <th>Total Price</th>
                            <th>IsPaid</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <ManageAllOrderRow
                                key={order._id}
                                index={index}
                                order={order}
                                setDeletingItem={setDeletingItem}
                                refetch={refetch}
                            />)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingItem && <ManageAllOrderDelete
                    refetch={refetch}
                    deletinItem={deletingItem}
                    setDeletingItem={setDeletingItem}
                />
            }
        </div>
    );
};

export default ManageAllOrders;