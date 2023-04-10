import React from 'react';
import './Feature.css'

const Feature = ({feature}) => {
  const {id,img,jobTitle,companyName,location,salary,jobPerformence,jobType,locationIcon,dollarIcon} = feature;
    return (
        <div className=' border rounded p-6'>
            <img src={img} alt="" />
            <h2 className='text-xl font-semibold'>{jobTitle}</h2>
            <p>{companyName}</p>
            <div>
                <button>{jobPerformence}</button>
                <button>{jobType}</button>
            </div>
            <div>
                
                <p> {location}</p>
                <p>{salary}</p>
            </div>

            <button>View Details</button>
        </div>
    );
};

export default Feature;