import React, { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const OderSummary = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <>
            <div className='space-y-3 bg-[#FFE1B3] px-3 py-3 rounded'>
             <h1 className='text-2xl  font-semibold'>Order Summary</h1>
                <p className='font-semibold'>Selected Item: {quantity}</p>
                <p className='font-semibold'>Total Price : ${totalPrice}</p>
                <p className='font-semibold'>Total Shipping Charge : ${totalShipping} </p>
                <p className='font-semibold'>Tax : ${tax.toFixed(2)}</p>
                <h2 className='text-xl font-semibold'>Grand Total: ${grandTotal.toFixed(2)} </h2>
               <div className='mx-auto space-y-4'>
               <button className='py-2 w-full font-semibold rounded flex justify-center gap-2  text-white px-5 bg-rose-500'>Clear Cart <TrashIcon className='w-6 h-6'></TrashIcon></button> 
              <button className='py-2 w-full font-semibold rounded  text-white px-5 bg-amber-500'>Review Order</button>
               </div>
             </div>
        </>
    );
};

export default OderSummary;