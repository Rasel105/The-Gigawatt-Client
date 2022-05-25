import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductDeleteModal from './ManageProductDeleteModal';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const [deletingItem, setDeletingItem] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/products`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    console.log(products)

    return (
        <div class="overflow-x-auto mt-2">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>S.L</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Min Order Quantity</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => <ManageProductRow
                            key={product._id}
                            refetch={refetch}
                            setDeletingItem={setDeletingItem}
                            product={product} />)
                    }
                </tbody>
            </table>
            {
                deletingItem && <ManageProductDeleteModal
                    deletinItem={deletingItem}
                    setDeletingItem={setDeletingItem}
                />
            }
        </div>
    );
};

export default ManageProducts;