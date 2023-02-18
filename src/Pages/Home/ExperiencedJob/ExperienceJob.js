import React, { useEffect, useState } from 'react';
import ExperienceJobCard from './ExperienceJobCard';

const ExperienceJob = () => {

    const [experienceJob, setExperienceJob] = useState([]);

    useEffect(() => {
        fetch('experienceJob.json')
            .then(res => res.json())
            .then(data => setExperienceJob(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-sky-900 font-bold text-5xl mt-12'>Experienced Job</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 mx-28 mt-12'>
                {
                    experienceJob?.slice(0, 6).map(card => <ExperienceJobCard
                        key={card.id}
                        card={card}
                    ></ExperienceJobCard>)
                }
            </div>
        </div>
    );
};

export default ExperienceJob;