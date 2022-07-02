import React, { useEffect, useState } from 'react';
import ReviewCard from '../Home/ReviewCard'
import Zoom from 'react-reveal/Zoom';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`https://the-gigawatt.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <div className='h-screen'>
            <h2 className='text-3xl text-center pt-20'><span className='text-primary'>Review</span> {reviews.length}</h2>
            <p className='text-center text-2xl my-3'>What's our valuable customer says</p>
            <Zoom left>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mb-10'>
                    {
                        reviews.map(rev => <ReviewCard
                            key={rev._id}
                            rev={rev}
                        />)
                    }
                </div>
            </Zoom>
        </div>
    );
};

export default Reviews;