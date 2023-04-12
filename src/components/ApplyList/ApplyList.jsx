import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

const ApplyList = ({apply}) => {
    const {id,img,jobTitle,companyName,jobType,jobPerformence,location,salary} = apply;
    return (
        <div className='flex justify-between  mb-4 my-10 border rounded p-10'>
            <div className='flex justify-center items-center gap-10'>
                <div className='border rounded px-10 py-14 bg-[#F4F4F4]'>
                    <img src={img} alt="" className='w-24' />
                </div>
                <div className='flex flex-col gap-2'>
                        <h2 className='text-xl font-semibold'>{jobTitle}</h2>
                        <p>{companyName}</p>


                        <div className="flex gap-6">
                                <button className=" border-2 border-blue-300 px-4 py-2 rounded bg-gradient-to-r     text-transparent  bg-clip-text from-blue-500  to-purple-500 font-semibold ">
                                {jobPerformence}
                            </button>
                            <button className=" border-2 border-blue-300 px-4 py-2 rounded bg-gradient-to-r   text-transparent  bg-clip-text from-blue-500  to-purple-500 font-semibold">
                            {jobType}
                            </button>
                      </div>

                        
                      <div className="text-[#757575] flex gap-10 ">
                                <p className="flex">
                                <span>
                                    {" "}
                                    <MapPinIcon className="h-6 w-6" />
                                </span>{" "}
                                <span>{location}</span>
                                </p>
                                <p className="flex">
                                <span>
                                    <CurrencyDollarIcon className="h-6 w-6  " />
                                </span>{" "}
                                <span>Salary :{salary}</span>
                                </p>
                        </div>

                </div>
                
            </div>
           <div className='flex justify-center items-center'>
                 <button className="nav-btn" > <Link to= {`/jobDetails/${id}`}> View Details</Link></button>
           </div>
            
        </div>
    );
};

export default ApplyList;