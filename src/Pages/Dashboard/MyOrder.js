import React from 'react';

const MyOrder = ({ order, setDeletingItem }) => {
    return (
        <>
            <tr>
                <th>1</th>
                <td>{order.userName}</td>
                <td>{order.email}</td>
                {/* <td>{order.address}</td> */}
                <td>{order.item}</td>
                <td>{order.minimumOrder}/pcs</td>
                <td><button className='btn btn-success text-white'>Pay</button></td>
                <td><label onClick={() => setDeletingItem(order)} for="all-info" class="btn btn-primary modal-button">Delete</label></td>
            </tr>

        </>
    );
};

export default MyOrder;