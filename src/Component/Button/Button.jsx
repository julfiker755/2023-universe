import React from 'react';

const Button = ({children,handleclick}) => {
    return (
        <>
        <button 
        onClick={handleclick}
        className='btn btn-success text-white'>{children}</button>
        </>
    );
};

export default Button;