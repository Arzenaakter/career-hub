import React, { useState, useEffect } from 'react';
import { CurrencyDollarIcon,BriefcaseIcon,PhoneIcon,EnvelopeIcon,MapPinIcon } from '@heroicons/react/24/solid'


import {  Link, useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'
import { addToDb } from '../../Utilities/FakeDB';




const JobDetails = () => {
    const {id} = useParams();
    const jobs = useLoaderData();
    // console.log('id:', id); 
    // console.log( jobs);

    if (!Array.isArray(jobs)) {
        return <p> Data can't Store...No jobs found</p>;
      }
    
    const job = jobs.find((j) => j.id === parseInt(id,10));
   
    
    if (!job) {
        return <p>Job not found </p>;
      }

// apply now
const handleApplyNow = ()=>{

    // console.log('object');
    addToDb(id)
    
}



    return (
        <>
        <div className='flex gap-10 my-10 mx-20 '>
                <div className=' w-[70%] flex flex-col gap-6'>
                    <p ><span className='text-lg font-semibold '>Job Responsibility:</span> {job.jobResponsibility} </p>
                    <p><span className='text-lg font-semibold '>Job Description: </span> {job.jobDescription}</p>
                    <p><span className='text-lg font-semibold '>Educational Requirements:</span><br /> {job.educationalRequirements}</p>
                    <p><span className='text-lg font-semibold '>Experiences:</span> {job.experiences}</p>

                </div>
                <div className=' w-[35%] '>
                   <div className='border p-6 bg-[#F4F2FF] rounded flex flex-col gap-6'>
                   <h3 className='text-lg font-semibold  ' >Job Details</h3>
                    <hr  />
                    <p className='flex '> <CurrencyDollarIcon className="h-6 w-6 text-[#757575] me-1" /> <span className='text-lg font-semibold me-1'> Salary: </span>  {job.salary}</p>

                    <p className='flex '><BriefcaseIcon className="h-6 w-6 text-[#757575] me-1 " /><span className='text-lg font-semibold  me-1'>Job title: </span> {job.jobTitle} </p>

                   <h2 className='text-lg font-semibold me-1'> Contact information</h2>
                    <hr />
                    <p className='flex '><PhoneIcon className="h-6 w-6 text-[#757575] me-1" /><span className='text-lg font-semibold me-1'>Phone:</span> {job.contactInfo.phone}</p>

                    <p className='flex '><EnvelopeIcon className="h-6 w-6 text-[#757575] me-1" /><span className='text-lg font-semibold me-1'>Email:</span> {job.contactInfo.email}</p>

                    <p className='flex '> <MapPinIcon className="h-6 w-6 text-[#757575] me-1" /><span className='text-lg font-semibold me-1'>Address:</span> {job.location}</p>

                   </div>
                   <button className='nav-btn mt-10 w-full ' onClick={handleApplyNow}>
                   Apply Now
                </button>

                </div>
                
        </div>
        </>
    );
};

export default JobDetails;