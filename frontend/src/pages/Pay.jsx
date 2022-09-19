import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { useState, useEffect } from 'react';
import axios from 'axios';



const Pay = () => {
    

    const [stripeToken, setStripeToken] = useState(null);


    const KEY = "pk_test_51HEbsEIcLXDPuEHqJaFkALmSiRTCivfVbDX0zRVkDSzEBKlC2wEjHDjOWPcCl4HyDuWcw67Wx7uKXsxig4xSLpTM00ooZSKKzJ"

   
    const onToken = (token) => {
        setStripeToken(token);
    }


    useEffect(() => {

        const makePayment = async() => {

            try {
                const res= await axios.post("https://buyerfriendly.herokuapp.com/api/payment",{
                    tokenId:stripeToken.id,
                    amount:3250,
                })
                // console.log(res.data);

            } catch (error) {
                console.log(error)
            }
        }

           stripeToken&& makePayment()
    }, [stripeToken])


    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"

        }}
        >
            <StripeCheckout
                name="Kharido"
                billingAddress
                shippingAddress
                description='Your total is $70'
                amount={3250}
                stripeKey={KEY}
                token={onToken}

            >

                <button style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "10px",
                    cursor: "pointer"
                }}>
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    )
}

export default Pay