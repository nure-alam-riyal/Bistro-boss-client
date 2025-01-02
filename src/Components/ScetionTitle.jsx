import React from 'react';

const ScetionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center my-10 w-1/4 mx-auto'>
            <p className='text-yellow-400 my-3'>--{subHeading}---</p>
            <h3 className='uppercase border-y-4 py-4 text-3xl font-bold'>
                {heading}
            </h3>
        </div>
    );
};

export default ScetionTitle;