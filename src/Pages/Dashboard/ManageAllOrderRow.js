import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { toast } from 'react-toastify';

const ManageAllOrderRow = ({ order, index, refetch, setDeletingItem }) => {
    const { _id, address, paid, status, item, minimumOrder, phone, totalPrice, userName, email } = order;
    const handleChangeStatus = (id) => {
        const status = "shipped";
        fetch(`http://localhost:5000/shipped/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ status }),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Product Shipped");
                console.log(data);
                console.log(order);
                refetch();
            });
    }
    return (
        <tr className="hover">
            <Zoom left cascade>
                <th>{index + 1}</th>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{item}</td>
                <td>{minimumOrder}/pcs</td>
                <td>${totalPrice}</td>
                <td>{paid && <button onClick={() => handleChangeStatus(_id)} className="btn btn-xs btn-accent text-white">{status ? "Shipped" : "Pending"}</button>}</td>
                <td>{paid ? <button className="btn btn-xs btn-primary text-white">Paid</button> : <button className="btn btn-xs btn-secondary text-white">Unpaid</button>}</td>
                <td>{!paid && <label onClick={() => setDeletingItem(order)} htmlFor="all-order" className="btn btn-error btn-xs text-white modal-button">Delete</label>}</td>
            </Zoom>
        </tr>
    );
};

export default ManageAllOrderRow;