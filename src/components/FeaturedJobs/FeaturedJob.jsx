import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

import './FeaturedJobs.css'

const FeaturedJob = () => {
    const [features, setFeatures] = useState([]);
    
    const [showAll, setShowAll] = useState(false);
    useEffect(() => { 
        fetch('/features.JSON')
        .then(res => res.json())
        .then(data => setFeatures(data))
        
     }, []);

     const seeAllHandle = () => {
        setShowAll(true);
        // console.log('click');
       

      };
      

    return (
        <div className='mb-20 jobCategory-section bg-white '>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold'> Featured Jobs</h2> <br />
                <p className='mb-10 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
           { showAll ? 
                    features.map(feature => <Feature key={feature.id} feature={feature}></Feature>) :
                    features.slice(0, 4).map(feature => <Feature key={feature.id} feature={feature}></Feature>)
              }
            </div>
            <div className=' my-10 flex justify-center '>
                 {showAll || features.length <= 4 ?'': <button className='nav-btn w-40 '  onClick={seeAllHandle}
                 >See All Jobs</button>}
            </div>
        </div>
    );
};

export default FeaturedJob;