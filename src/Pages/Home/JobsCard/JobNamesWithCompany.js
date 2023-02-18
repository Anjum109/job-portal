import React from 'react';
import { Link } from 'react-router-dom';

const JobNamesWithCompany = ({ category }) => {
    const { company_name, position, job_location } = category;
    return (
        <div>
            <div class="row1-container">
                <div class="box box-down cyan">
                    <h2>{company_name}</h2>
                    <p>Intern {position}</p>
                    <p>{job_location}</p>
                    <Link to='/viewdetailsaboutfreshersjob'><img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" /></Link>
                    <Link to='applynow'> <button className=' border border-sky-200 px-3 py-2 mt-3 bg-sky-50 text-sky-800 hover:bg-sky-900 hover:text-white font-bold'>Apply Now</button></Link>
                </div></div>
        </div>
    );
};

export default JobNamesWithCompany;