import React from 'react';

const ManageAllOrderRow = ({ order, index, refetch }) => {
    const {address, item, minimumOrder, phone,totalPrice, userName, email } = order;
    return (
        <tr class="hover">
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{item}</td>
            <td>{minimumOrder}</td>
            <td>{totalPrice}</td>
            <td><button className="btn btn-xs btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default ManageAllOrderRow;