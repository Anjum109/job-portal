import React from 'react';
import BangladeshiCompany from './TopItCompanies/BangladeshiCompany';
import WorldwideCompany from './TopItCompanies/WorldwideCompany';

const ItCompanies = () => {
    return (
        <div>
            <h2 className='text-center text-sky-900 font-bold text-5xl mt-12'>Top IT Companies</h2>
            <BangladeshiCompany>

            </BangladeshiCompany>
            <WorldwideCompany></WorldwideCompany>
        </div>
    );
};

export default ItCompanies;