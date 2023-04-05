import React from 'react';

const Button = ({children}) => {
    return (
        <div className='flex justify-center'>
            <button className='py-2 px-3 bg-amber-400 rounded text-center font-semibold'>{children}</button>
        </div>
    );
};

export default Button;