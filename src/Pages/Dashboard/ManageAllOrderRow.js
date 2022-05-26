import React from 'react';
import Zoom from 'react-reveal/Zoom';

const ManageAllOrderRow = ({ order, index, refetch, setDeletingItem }) => {
    const { address, paid, item, minimumOrder, phone, totalPrice, userName, email } = order;
    return (
        <tr class="hover">
            <Zoom left cascade>
                <th>{index + 1}</th>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{item}</td>
                <td>{minimumOrder}/pcs</td>
                <td>${totalPrice}</td>
                <td>{paid ? <button className="btn btn-xs btn-primary text-white">Paid</button> : <button className="btn btn-xs btn-secondary text-white">Unpaid</button>}</td>
                <td>{!paid && <label onClick={() => setDeletingItem(order)} htmlFor="all-order" className="btn btn-error btn-xs text-white modal-button">Delete</label>}</td>
            </Zoom>
        </tr>
    );
};

export default ManageAllOrderRow;