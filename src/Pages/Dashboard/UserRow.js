import React from 'react';
import { toast } from 'react-toastify';
import Zoom from 'react-reveal/Zoom';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make an Admin");
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Created Admin")
                    refetch();
                }
            })
    }
    return (
        <tr>
            <Zoom left cascade>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            </Zoom>
        </tr>
    );
};

export default UserRow;