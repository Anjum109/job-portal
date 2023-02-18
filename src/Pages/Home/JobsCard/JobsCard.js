import React, { useEffect, useState } from 'react';
import JobNamesWithCompany from './JobNamesWithCompany';
import './Style.css'
const JobsCard = () => {

    const [job, setJob] = useState([]);

    useEffect(() => {
        fetch('companyName.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (

        <div>
            <h2 className='text-center text-sky-900 font-bold text-5xl mt-12'>Freshers Job</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 lg:mx-28 mt-12'>
                {
                    job?.slice(0, 6).map(category => <JobNamesWithCompany
                        key={category.id}
                        category={category}
                    ></JobNamesWithCompany>)
                }
            </div>
        </div>
    );
};

export default JobsCard;