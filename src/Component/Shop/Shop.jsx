import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import OderSummary from '../OderSummary/OderSummary';
import Product from '../Product/Product';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import { getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products,setproduct] = useState([]);
    const [cart,setcart] = useState([]);
    const [showAll,setShowAll] = useState(false);
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`).then(res=>res.json()).then(data=>setproduct(data))
    },[]);
    useEffect( () =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setcart(savedCart);
    }, [products])
    const hendelClick = (product) =>{
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        setcart(newCart);
        addToDb(product.id)
    }
    const showAllData = ()=>{
            setShowAll(true);
    }
    const clearData = () => {
        setcart([])
        deleteShoppingCart()
    }
    return (
        <div className='w-full max-w-6xl mx-auto md:flex  justify-between gap-5 py-10'>
            <div className='border md:w-[80%] p-5 '>
                <div className='grid rounded-lg  grid-cols-1 md:grid-cols-3 gap-5 pb-5'>
                {
                   products.slice(0,showAll ? products.length : 6).map(product => <Product key={product.id} product={product} hendelClick={hendelClick}></Product>)
                } ;
                </div>
                {
                 !showAll && <div className='flex justify-center'>
                    <span className='inline-block' onClick={showAllData}>
                    <Button>See More</Button>
                    </span>
                    </div>
                }
            </div>
            <div className='md:w-[30%] p-5'>
               <OderSummary clearData={clearData} cart={cart}>
                <Link  to={"/order"}>
                <div className='flex gap-2 justify-center'>Review Order <ArrowRightIcon className='w-6 h-6'></ArrowRightIcon> </div>
                </Link>
               </OderSummary>
            </div>
        </div>
    );
};

export default Shop;