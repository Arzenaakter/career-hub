import React from 'react';
import './DreamJobs.css'
import bannerimg from '../../assets/Images/banner.png';

const DreamJobs = () => {
    return (
        <div className='dremJob-container py-6  flex flex-col md:flex-row gap-4 '>
            <div className='text-center md:text-start '>
                <h2 className='text-5xl font-bold leading-relaxed'>
                One Step <br /> Closer To Your <br /><span className="bg-gradient-to-r text-transparent bg-clip-text from-blue-500  to-purple-500">Dream Job</span>
                </h2><br />
                <p >
                Explore thousands of job opportunities with all  the <br />
                 information you need. Its your future. Come find it. Manage all  
                 your job application from start to finish.
                </p><br />
                <button className='nav-btn'>Get Started</button>
            </div>
            <div>
                <img src={bannerimg} alt=" banner image" />

            </div>
            
        </div>
    );
};

export default DreamJobs;