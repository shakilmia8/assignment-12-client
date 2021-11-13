import React from 'react';
import './Shipping.css';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import { getStoredCart, clearTheCart } from '../../../utilities/fakedb';

const Shipping = ({ product }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, token } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch('https://fierce-fjord-96835.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${token}`,
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
                    <input defaultValue={user.displayName} {...register("name")} readOnly /><br />
                    <input defaultValue={user.email} {...register("email", { required: true })} readOnly /><br />
                    <input defaultValue={product._id} {...register("productId", { required: true })} readOnly /><br />
                    <input defaultValue={product.name} {...register("productName", { required: true })} readOnly /><br />
                    <input defaultValue={product.price} {...register("productPrice", { required: true })} readOnly /><br />
                    <input defaultValue={new Date().toLocaleDateString()} {...register("OrderDate", { required: true })} readOnly /><br />
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