import React from 'react';
import { toast } from 'react-toastify';

const ManageProductDeleteModal = ({ deletinItem, setDeletingItem, refetch }) => {

    const { _id } = deletinItem;

    const handleDelete = () => {
        const url = `https://the-gigawatt.herokuapp.com/product/${_id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success("Item Deleted");
                    refetch()
                    setDeletingItem(null);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="all-info" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="all-info" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="py-4 text-xl">Are you sure to delete this item?</p>
                    <div className="modal-action">
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error text-white">Delete</button>
                        <label htmlFor="all-info" className="btn btn-xs text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProductDeleteModal;