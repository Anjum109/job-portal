import React from 'react';

const ExperienceJobCard = ({ card }) => {
    const { company_name, position, job_location, company_logo } = card;
    return (
        <div className="card card-side bg-base-100 shadow-xl m-5 border border-sky-300">
            <figure><img className='w-1/2' src={company_logo} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{company_name}</h2>
                <p>{position}</p>
                <p>{job_location}</p>
                <div className="card-actions justify-end align-center">
                    <button className="border border-sky-200 px-3 py-2 mt-3 bg-sky-50 text-sky-800 hover:bg-sky-900 hover:text-white font-bold">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default ExperienceJobCard;