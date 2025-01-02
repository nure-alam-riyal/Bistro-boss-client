import React from 'react';

const Button = ({words}) => {
    return (
        <div className='flex justify-center my-20'>
           <button className='btn font-semibold text-xl border-b-4 border-b-black'>{words}</button> 
        </div>
    );
};

export default Button;