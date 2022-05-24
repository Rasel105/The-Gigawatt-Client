import React from 'react';
import MyOrderDeleteModal from './MyOrderDeleteModal';

const MyOrder = ({ order }) => {
    return (
        <>
            <tr>
                <th>1</th>
                <td>{order.userName}</td>
                <td>{order.email}</td>
                {/* <td>{order.address}</td> */}
                <td>{order.phone}</td>
                <td>{order.minimumOrder}/pcs</td>
                <td><button className='btn btn-success text-white'>Pay</button></td>
                <td><label for="all-info" class="btn btn-primary modal-button">Delete</label></td>
            </tr>
            <MyOrderDeleteModal order={order} />
        </>
    );
};

export default MyOrder;