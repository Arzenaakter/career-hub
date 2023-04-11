import React, { useState, useEffect } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'


import {  useLoaderData, useParams } from 'react-router-dom';
import './JobDetails.css'



const JobDetails = () => {
    const {id} = useParams();
    const jobs = useLoaderData();
    // console.log('id:', id); 
    // console.log( jobs);

    if (!Array.isArray(jobs)) {
        return <p>No jobs found</p>;
      }
    
    const job = jobs.find((j) => j.id === parseInt(id,10));
   
    
    if (!job) {
        return <p>Job not found because data can't save here</p>;
      }
    return (
        <>
        <div className='flex gap-10 my-10 mx-20 '>
                <div className='border w-[70%] flex flex-col gap-6'>
                    <p ><span className='text-lg font-semibold '>Job Responsibility:</span> {job.jobResponsibility} </p>
                    <p><span className='text-lg font-semibold '>Job Description: </span> {job.jobDescription}</p>
                    <p><span className='text-lg font-semibold '>Educational Requirements:</span><br /> {job.educationalRequirements}</p>
                    <p><span className='text-lg font-semibold '>Experiences:</span> {job.experiences}</p>

                </div>
                <div className=' w-[30%] '>
                   <div className='border p-6 bg-[#F4F2FF] rounded flex flex-col gap-2'>
                   <h3 className='text-lg font-semibold  ' >Job Details</h3>
                    <hr  />
                    <p className='flex'> <BeakerIcon className="h-6 w-6 text-blue-500 me-2" /> <span className='text-lg font-semibold '> Salary:</span> {job.salary}</p>
                    <p><span className='text-lg font-semibold '>Job title: </span> {job.jobTitle}</p>
                   <h2 className='text-lg font-semibold '> Contact information</h2>
                    <hr />
                    <p><span className='text-lg font-semibold '>Phone:</span> {job.contactInfo.phone}</p>
                    <p><span className='text-lg font-semibold '>Email:</span> {job.contactInfo.email}</p>
                    <p><span className='text-lg font-semibold '>Address:</span> {job.location}</p>
                   </div>
                   <button className='nav-btn mt-10 w-full '>
                    Apply Now
                </button>

                </div>
                
        </div>
        </>
    );
};

export default JobDetails;