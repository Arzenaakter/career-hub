import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJob } from '../../Utilities/FakeDB';
import ApplyList from '../ApplyList/ApplyList';

import './AppliedJobs.css'

const AppliedJobs = () => {
    const {newJobArray} = useLoaderData();
    const [filterValue, setFilterValue] = useState([]);

    const handleFilterChange = (e) => {
        setFilterValue(e.target.value);
    }

    let filteredJobs = newJobArray;
    // console.log(filteredJobs);

    if (filterValue === 'Remote') {
        filteredJobs = newJobArray.filter(job => job.jobPerformence === 'Remote');
      
    } else if (filterValue === 'Onsite') {
        filteredJobs = newJobArray.filter(job => job.jobPerformence === 'Onsite');
        // console.log(filteredJobs);
    }
    
    return (
        <div className='m-auto w-[80%]'>
            <div className='filter flex justify-end mt-10'>
                <select className='p-2 border rounded' value={filterValue} onChange={handleFilterChange}>
                    <option value=''>Filter BY</option>
                    <option value='Remote'>Remote</option>
                    <option value='Onsite'>OnSite</option>
                </select>
            </div>
            {
               filteredJobs.map(job => <ApplyList 
                    key={job.id}
                    apply={job}
                />)
            }
        </div>
    );
};

export default AppliedJobs;
