import React from 'react';
import { AiFillStar } from "react-icons/ai";


const ReviewCard = ({ rev }) => {
    const { ratings, review } = rev;
    
    return (
        
            <div className="card w-96 bg-base-100 shadow-2xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">Ratings {ratings}<AiFillStar color='blue' /></h2>
                    <p className='mt-3'><span className='font-bold'>Desctription</span>: {review}</p>
                </div>
            </div>
    );
};

export default ReviewCard;