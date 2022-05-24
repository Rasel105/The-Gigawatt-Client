import React from 'react';

const MyOrderDeleteModal = ({ order }) => {

    const handleDelete = (id) => {
        // fetch('https://example.com/delete-item/' + id, {
        //     method: 'DELETE',
        // })
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        console.log(id)
    }

    return (
        <div>
            <input type="checkbox" id="all-info" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label htmlFor="all-info" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{order.item}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(order._id)} class="btn btn-xs btn-error text-white">Delete</button>
                        <label for="all-info" class="btn btn-xs text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderDeleteModal;