import React from 'react';
const Product = (props) => {
    const {name,img,price,category,ratings,seller} = props.product;
    return (
        <div>
        <div className="card w-full h-full rounded-t-lg bg-base-100 shadow-xl flex flex-col justify-between gap-10 p-3">
        <div className="">
          <figure><img className='rounded' src={img} alt="Shoes" /></figure>
           <h2 className="text-xl font-semibold">{name}</h2>
            <h1 className='font-semibold'>Price:${price}</h1>
        </div>
         <div className="space-y-2">
            <h3>Manufacturer : {seller}</h3>
            <h2 >Rating : {ratings} Start</h2>
            <button onClick={()=>props.hendelClick(props.product)} className="w-full bg-amber-400 py-2 px-3 rounded font-semibold">Add To Cart </button>
        </div>
        </div>
    </div>
            );
};

export default Product;