import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'
const ReviewItem = ({item,removeCart}) => {
    const {id,img,name,price,quantity,ratings,stock} = item;
    return ( 
        <div>
           <div className='bg-slate-500 md:w-[500px] rounded flex gap-2 justify-between items-center px-5 '>
              <div className='flex gap-2 items-center'>
              <img className='w-16 h-16 rounded-full' src={img} alt="" />
                <div className='font-semibold'>
                <h2>{name}</h2>
                <h5>Price:{price}</h5>
                <h3>Rating:{ratings}</h3>
                </div>
              </div>
                <div className='p-2 text-white'>
                   <button onClick={()=>removeCart(id)}><TrashIcon className='w-8 h-8'></TrashIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;