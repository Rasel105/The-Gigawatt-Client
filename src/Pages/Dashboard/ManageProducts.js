import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductDeleteModal from './ManageProductDeleteModal';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const [deletingItem, setDeletingItem] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`https://the-gigawatt.herokuapp.com/products`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    
    return (
        <>
            <h2 className='text-center text-2xl'>Manage Products</h2>
            <div className="overflow-x-auto mt-2">
                <table className="table w-full">
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
                            products.map((product, index) => <ManageProductRow
                                key={product._id}
                                index={index}
                                refetch={refetch}
                                setDeletingItem={setDeletingItem}
                                product={product} />)
                        }
                    </tbody>
                </table>
                {
                    deletingItem && <ManageProductDeleteModal
                        deletinItem={deletingItem}
                        refetch={refetch}
                        setDeletingItem={setDeletingItem}
                    />
                }
            </div>
        </>
    );
};

export default ManageProducts;