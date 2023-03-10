import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const menuItems = <React.Fragment>
        <li className='hover:text-sky-500  text-sky-900'><Link to="/">Home</Link></li>
        <li className='hover:text-sky-500 text-sky-900'><Link to="/about">About</Link></li>
        <li className='hover:text-sky-500 text-sky-900'><Link to="/contact">Contact Us</Link></li>
        {user?.uid ?
            <>
                <li className='hover:text-sky-500 text-sky-900'><button onClick={handleLogOut} >Sign out</button></li>
            </>
            :
            <>
                <li className='hover:text-sky-500 text-sky-900'><Link to="/login">Login</Link></li>

            </>}



    </React.Fragment >


    return (
        <div className="mt-3 navbar flex justify-between bg-sky-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="items menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl my-2"><span className='sweet text-3xl ml-5 text-sky-500 font-bold hover:text-sky-800'>Job <span className='text-sky-800 hover:text-sky-500 font-bold'>Portal</span></span></Link>
            </div>
            <div className="items navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;