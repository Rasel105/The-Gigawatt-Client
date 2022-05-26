import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Dashboard/CheckoutForm'

const stripePromise = loadStripe('pk_test_51L0bHqBqGGr0Fo7RYZArm0gxQiaQHYZqcXnNmcEvVDndyz0tWRSjve16uDZrRos4j5Ta5863L3w9IWJjLMRJmxG600eM27PV3H');

const Payment = () => {
    const { id } = useParams();
    const url = `https://the-gigawatt.herokuapp.com/payment/${id}`;
    const { data: payment, isLoading } = useQuery(["payment", id], () => fetch(url, {
        method: "GET",
        headers: {
            'authorization': `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }




    return (
        <div className=''>
            <div>
                <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 mx-auto">
                    <div class="card-body">
                        <p className='text-success font-bold'>Hello, {payment.userName}</p>
                        <h2 class="card-title">Pay for {payment.item}</h2>
                        <p>Your Products <span className='text-orange-700'>{payment.item}</span> </p>
                        <p>Please pay: ${payment.totalPrice}</p>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100">
                    <div class="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm payment={payment} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;