import React from 'react';
import { toast } from 'react-toastify';

const MyOrderDeleteModal = ({ deletinItem, setDeletingItem }) => {
    const { email } = deletinItem;
    const handleDelete = () => {

        const url = `http://localhost:5000/myorder/${email}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success("Item Deleted");
                    setDeletingItem(null);
                }
            })
    }
    console.log(deletinItem);

    return (
        <div>
            <input type="checkbox" id="all-info" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="all-info" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p class="py-4 text-xl">Are you sure to delete this item?</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete()} class="btn btn-xs btn-error text-white">Delete</button>
                        <label for="all-info" class="btn btn-xs text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDeleteModal;