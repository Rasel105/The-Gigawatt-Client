import React from 'react';

const MyOrder = ({ order, setDeletingItem, index }) => {
    const { userName, email, item, minimumOrder, totalPrice } = order;
    console.log(order);
    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{item}</td>
                <td>{totalPrice}</td>
                <td>{minimumOrder}/pcs</td>
                <td><button className='btn btn-success text-white'>Pay</button></td>
                <td><label onClick={() => setDeletingItem(order)} for="all-info" class="btn btn-primary modal-button">Delete</label></td>
            </tr>
        </>
    );
};

export default MyOrder;