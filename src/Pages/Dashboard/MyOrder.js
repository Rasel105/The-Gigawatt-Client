import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const MyOrder = ({ order, setDeletingItem, index }) => {
    const { _id, userName, paid, email, item, minimumOrder, totalPrice, transactionId } = order;

    return (
        <>
            <tr>
                <th>{index + 1}</th>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{item}</td>
                <td>${totalPrice}</td>
                <td>{minimumOrder}/pcs</td>
                <td>
                    {(!paid) && <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success text-white'>Pay</button></Link>}
                    {(paid) && <div>
                        <p><button className='btn btn-xs btn-primary text-white'>Paid</button></p>
                        <p>Transaction Id: <span className='text-success'>{transactionId}</span> </p>
                    </div>}
                </td>
                {!paid && <td><label onClick={() => setDeletingItem(order)} htmlFor="all-info" className="btn btn-error btn-xs text-white modal-button">Delete</label></td>}
            </tr>
        </>
    );
};

export default MyOrder;