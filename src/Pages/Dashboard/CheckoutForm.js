import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
const CheckoutForm = ({ payment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");

    const { _id, totalPrice, userName, email } = payment;

    useEffect(() => {
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })

    }, [totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        };

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        setCardError(error?.message || "");
        setSuccess('');
        setProcessing(true);
        // confirm payment 

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            toast.error(`${intentError?.message}`);
            setProcessing(false);
        } else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            setSuccess("Congrats! Your payment is completed");
            toast.success("Yah! Payment Completed!");

            // store payment on database 
            const payment = {
                item: _id,
                transactionId: paymentIntent.id
            }

            fetch(`http://localhost:5000/payment-order/${_id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                })


        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs text-white mt-4' type="submit" disabled={!stripe || !clientSecret || transactionId}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-error mt-2 text-center'>{cardError}</p>
            }
            {
                success && <div className=' mt-2 text-center'>
                    <p className='text-primary'>{success}</p>
                    <p className='text-lg'>Your transaction Id: <span className='text-xl font-bold '>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;