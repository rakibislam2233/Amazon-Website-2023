import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import NavBar from '../NavBar/NavBar';
import Shop from '../Shop/Shop';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
       <nav className='bg-[#1C2B35] z-50 md:h-20  '>
            <div className='w-full max-w-6xl md:h-20 mx-auto md:flex justify-between items-center p-5'>
                <img src="Logo.svg" alt="logo.svg" />
                <ul  className='text-white flex justify-center item-center gap-5 hove:text-rose-400'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/orderReview">Order Review</Link></li>
                    <li><Link to="/inventory">Manage Inventory</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default Header;