import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJob } from '../../Utilities/FakeDB';
import ApplyList from '../ApplyList/ApplyList';



import './AppliedJobs.css'

const AppliedJobs = () => {
  
    const {newJobArray} = useLoaderData();
    console.log(newJobArray);
  
  
    return (
        <div className='m-auto w-[80%]'>
        
            {
               newJobArray.map(apply=> <ApplyList 
                key={apply.id}
                apply = {apply}
               ></ApplyList>)
            }
        </div>
    );
};

export default AppliedJobs;