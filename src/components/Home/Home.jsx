import React from 'react';
import DreamJobs from '../DreamJob/DreamJobs';
import FeaturedJob from '../FeaturedJobs/FeaturedJob';
import JobCategory from '../JobCategory/JobCategory';
import './Home.css'

const Home = () => {
    return (
        <div className='home-section'>
           <DreamJobs></DreamJobs>
           <JobCategory></JobCategory>
           <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;