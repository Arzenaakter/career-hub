import React, { useEffect, useState } from 'react';
import Feature from '../Feature/Feature';

import './FeaturedJobs.css'

const FeaturedJob = () => {
    const [features, setFeatures] = useState([]);
    // const [minFeatures ,setMinFeatures] = useState(features.slice(0,4 ));
    const [showAll, setShowAll] = useState(false);
    useEffect(() => { 
        fetch('/features.JSON')
        .then(res => res.json())
        .then(data => setFeatures(data))
        
     }, []);

    //  const handleClick = () => {
    //     setShowAll(true);
    //     setMinFeatures(features);

    //   };
      
//  console.log(setShowAll(showAll));
    return (
        <div className='mb-20 jobCategory-section bg-white '>
            <div className='text-center'>
                <h2 className='text-4xl font-semibold'> Featured Jobs</h2> <br />
                <p className='mb-10 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
                {
                    features.slice(0,4).map(feature => <Feature
                    key={feature.id}
                    feature={feature}
                    
                    ></Feature>)
                }

            </div>
        </div>
    );
};

export default FeaturedJob;