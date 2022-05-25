import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, setDeletingItem, index }) => {
    const { _id, userName, email, item, minimumOrder, totalPrice } = order;
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
                <td><Link to={`/dashboard/payment/${_id}`} className='btn btn-success text-white'>Pay</Link></td>
                <td><label onClick={() => setDeletingItem(order)} htmlFor="all-info" className="btn btn-primary modal-button">Delete</label></td>
            </tr>
        </>
    );
};

export default MyOrder;