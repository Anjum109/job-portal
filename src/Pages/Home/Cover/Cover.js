import React from 'react';
import img from '../../../assets/images/istockphoto-1143533761-612x612-removebg-preview.png'
import { FaArrowDown, FiArrowDownCircle } from "react-icons/fa";
const Cover = () => {
    return (
        <div className="hero bg-sky-50">
            <div className='mt-12'>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm w-full" />
                    <div>
                        <h1 className="text-5xl font-bold">Searching for a <span className='text-sky-800'>JOB?</span></h1>
                        <h3 className='text-3xl font-bold mt-5'>Find the best <span className='text-sky-500'>startup job</span> that fit you</h3>
                        <p className="py-6">The Eassiest Way to Get Your New Job</p>
                        <div>
                            <form className="pt-12">

                                <div className='grid lg:grid-cols-3 grid-cols-1'>
                                    <input type="text" name='email' placeholder="Job title" className="input input-bordered border border-white mr-5" required />


                                    <div className="dropdown dropdown-hover">
                                        <label tabIndex={0} className="btn  bg-sky-700 text-white px-28 ">Location<FaArrowDown className='ml-3'></FaArrowDown> </label>
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow  bg-sky-900 text-white rounded-box w-52">
                                            <li className='hover:bg-sky-700'><a>Dhaka</a></li>
                                            <li className='hover:bg-sky-700'><a>Sylhet</a></li>
                                            <li className='hover:bg-sky-700'><a>Chittagong</a></li>
                                            <li className='hover:bg-sky-700'><a>Khulna</a></li>
                                            <li className='hover:bg-sky-700'><a>Rajshahi</a></li>
                                        </ul>
                                    </div>
                                    <input className="btn py-2 text-2xl px-7 rounded-xl font-bold border border border-sky-100 bg-sky-800 " type="submit" value="Search Job" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;