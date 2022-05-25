import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/reviews?email=${user.email}`, {
                method: "GET",
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem("accessToken");
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {
                    setReviews(data)
                    console.log(data)
                })
        }
    }, [user, navigate])
    return (
        <>
            <h2 className=' text-3xl text-center my-10'><span className='text-primary'>Review</span> {reviews.length}</h2>
            <div>
                {
                    reviews.map(review => <div key={review._id}>
                        <h2>{review.ratings}</h2>
                    </div>)
                }
            </div>
        </>
    );
};

export default Reviews;