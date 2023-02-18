import React, { useEffect, useState } from 'react';
import BdCompanyCard from './BdCompanyCard';
import './topCompany.css'

const BangladeshiCompany = () => {
    const [bdCompany, setBdCompany] = useState([]);

    useEffect(() => {
        fetch('TopBdCompany.json')
            .then(res => res.json())
            .then(data => setBdCompany(data))
    }, [])

    return (
        <div>
            <h2 className='text-center text-sky-900 font-bold text-2xl mt-12'>Top 3 Bangladeshi IT Comapnies</h2>
            <div className='grid grid-cols-1 gap-0 mx-28 mt-5'>
                {
                    bdCompany.map(bdCompanyCard => <BdCompanyCard
                        key={bdCompanyCard.id}
                        bdCompanyCard={bdCompanyCard}
                    ></BdCompanyCard>)
                }
            </div>
        </div>
    );
};

export default BangladeshiCompany;