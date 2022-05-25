import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/products`)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading />
    }

    return (
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
                        products.map(product => <ManageProductRow
                            key={product._id}
                            refetch={refetch}
                            product={product} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;