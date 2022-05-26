import React, { useEffect, useState } from 'react';
import ReviewCard from '../Home/ReviewCard'
const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data)
            })
    }, [])


    return (
        <>
            <h2 className='text-3xl text-center pt-20'><span className='text-primary'>Review</span> {reviews.length}</h2>
            <p className='text-center text-2xl m'>What's our valuable customer says</p>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mb-10'>
                {
                    reviews.map(rev => <ReviewCard
                        key={rev._id}
                        rev={rev}
                    />)
                }
            </div>
        </>
    );
};

export default Reviews;