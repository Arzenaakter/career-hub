import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';


import './JobCategory.css'

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => { 
        fetch('./jobCategory.JSON')
        .then(res => res.json())
        .then(data => setCategories(data))
     }, [])
    return (
        <div className='py-20 jobCategory-section bg-white '>
            <div className='text-center'>
            <h2 className='text-4xl font-semibold'> Job Category List</h2> <br />
            <p className='mb-10 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-4 gap-4 justify-center items-center '>
                {categories.map(category =><Category
                key={category.id}
                    category ={category}
                ></Category>)}
            </div>
            
        </div>
    );
};

export default JobCategory;