import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ order, setDeletingItem, index }) => {
    const { _id, userName, paid, email, item, minimumOrder, totalPrice } = order;
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
                <td>
                    {/* <Link to={`/dashboard/payment/${_id}`} className='btn btn-success text-white'>Pay</Link> */}
                    {(totalPrice && !paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success text-white'>Pay</button></Link>}
                </td>
                {!paid && <td><label onClick={() => setDeletingItem(order)} htmlFor="all-info" className="btn btn-error btn-xs text-white modal-button">Delete</label></td>}
            </tr>
        </>
    );
};

export default MyOrder;