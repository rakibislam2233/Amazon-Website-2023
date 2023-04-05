
import { useEffect, useState } from 'react';
import OderSummary from '../OderSummary/OderSummary';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
    const data = useLoaderData();
    const [cart,setCart] = useState([])
    useEffect( () =>{
        const storedCart = getShoppingCart()
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = data.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [data])
    const removeCart = (id) => {
        const remaining = cart.filter(product => product.id!==id)
        setCart(remaining)
        removeFromDb(id)
    }
    const clearData = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='w-full max-w-6xl mx-auto md:flex  justify-between gap-5 py-10'>
            <div className='space-y-4 p-3'>
                {
                    cart.map(item=><ReviewItem item={item} removeCart={removeCart}></ReviewItem>)
                }
            </div>
            <div className='md:p-3'>
           <OderSummary clearData={clearData}  cart={cart}>
            <Link to={"/chakOut"}>
            <div>
            Procced ChackOut
            </div>
            </Link>
           </OderSummary>
            </div>
        </div>
    );
};

export default Order;