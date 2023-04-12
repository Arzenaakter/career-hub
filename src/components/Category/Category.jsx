import React from 'react';

const Category = ({category}) => {
    const {logo,name,jobs } = category;
    return (
        <div className='rounded-md  p-10 bg-[#FAF8FF] '>
            <img src={logo} alt=""  className='bg-[#EFECFF] p-4 rounded-md m-auto md:m-0 w-20'/>
            <h4 className='text-xl font-semibold text-center md:text-left my-4'>{name}</h4>
            <p className='text-[#A3A3A3] text-center md:text-left'>{jobs}</p>
            
        </div>
    );
};

export default Category;