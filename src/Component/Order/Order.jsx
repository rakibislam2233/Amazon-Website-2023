import React from 'react';
import OderSummary from '../OderSummary/OderSummary';

const Order = () => {
    return (
        <div className='w-full max-w-6xl mx-auto md:flex  justify-between gap-5 py-10'>
            <div>
                <h2>This is a Order Container</h2>
            </div>
            <div>
           <OderSummary  cart={[]}></OderSummary>
            </div>
        </div>
    );
};

export default Order;