import React, { useEffect, useState } from 'react';
import WorldWideCompanyCard from './WorldWideCompanyCard';

const WorldwideCompany = () => {
    const [worldCompany, setWorldCompany] = useState([]);

    useEffect(() => {
        fetch('TopWorldItFirm.json')
            .then(res => res.json())
            .then(data => setWorldCompany(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className='text-center text-sky-900 font-bold text-1sxl mt-12'>Top 3 Bangladeshi IT Comapnies</h2>
                <div className='grid grid-cols-1 gap-0 mx-28 mt-5'>
                    {
                        worldCompany.map(worldCompanyCard => <WorldWideCompanyCard
                            key={worldCompanyCard.id}
                            worldCompanyCard={worldCompanyCard}
                        ></WorldWideCompanyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WorldwideCompany;