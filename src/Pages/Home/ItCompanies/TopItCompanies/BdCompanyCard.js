import React from 'react';

const BdCompanyCard = ({ bdCompanyCard }) => {
    const { job_location, company_name, company_logo, details, image } = bdCompanyCard;
    return (
        <div>
            <div id="container">

                <div className="product-details">
                    <div className='w-1/2 mb-5'><img src={company_logo} alt="" /></div>
                    <h1 className='text-sky-800'>{company_name}</h1>


                    <p className="information"></p>

                    <h2 >{job_location}</h2>


                </div>

                <div className="product-image">

                    <img src={image} alt="" />


                    <div className="info">

                        <ul className=''>
                            {details}

                        </ul>
                    </div>
                </div>
                <div className="flex card-actions justify-start mt-5 mr-5">

                    <label

                        htmlFor="booking-modal"
                        className="btn border border-white shadow-sm shadow-slate-400 bg-white text-black w-full">Apply now  </label>
                    <label

                        htmlFor="booking-modal"
                        className="btn  border border-white shadow-sm shadow-slate-400 bg-white text-black w-full">View Details</label>
                </div>

            </div>
        </div>
    );
};

export default BdCompanyCard;