import React from 'react';
import './Shipping.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { getStoredCart, clearTheCart } from '../../../utilities/fakedb';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://ghoulish-web-04262.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert('Order Processed Successfully')
                    clearTheCart();
                    reset();
                }
            })
    };
    return (
        <div>
            <div className='add-service'>
                <h2>Orders Form</h2>
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} /><br />
                    <input defaultValue={user.email} {...register("email", { required: true })} /><br />
                    <input placeholder="Address" defaultValue="" {...register("address")} /><br />
                    <input placeholder="City" defaultValue="" {...register("city")} /><br />
                    <input placeholder="Phone" defaultValue="" {...register("phone")} /><br />
                    {errors.email && <span className='error'>This field is required</span>}<br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;