import React from 'react';

const ManageProductRow = ({ product, setDeletingItem, index }) => {
    const { product_name, price, min_order_quantity, img, available_quantity } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <th><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></th>
            <td>{product_name}</td>
            <td>{price}$</td>
            <td>{min_order_quantity}/pcs</td>
            <td>{available_quantity}/pcs</td>
            <td><label onClick={() => setDeletingItem(product)} htmlFor="all-info" className="btn btn-error text-white modal-button">Delete</label></td>
        </tr>
    );
};

export default ManageProductRow;