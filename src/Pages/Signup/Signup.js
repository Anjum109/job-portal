import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import img from '../../assets/images/137-d_1600x1200_4x.png'

const Signup = () => {

    const { createUser, google, updateUser, loading } = useContext(AuthContext)
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [passwordError, setPasswordError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();


    const handleSignup = (event, data) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const confirm = form.confirm.value;


        //password authentication
        // if (password.length < 6) {
        //     setPasswordError("Please should be at least 6 characters");
        //     return;
        // }
        // if (!/(?=.[!@#$%&^])/.test(password)) {
        //     setPasswordError("Please add at least one special character");
        //     return;
        // }
        // if (password !== confirm) {
        //     setPasswordError("password and confirm password did not match");
        //     return;
        // }
        // setPasswordError("");





        createUser(email, password, name)
            .then(result => {
                const user = result.user
                setSuccess(true);
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {


                    })

            })
            .catch(error => console.error(error))
    }


    const handleGoogle = () => {
        google()
            .then(result => {
                const user = result.user
                if (user) {
                    navigate('/')

                }
            })
            .catch(error => console.error(error))
    }


    return (
        <div>

            <div className="">
                <div className="">
                    <div className="">
                        <div className=''>
                            <h1 className='text-5xl text-center text-sky-800 mt-5 font-bold mb-12'>Registration</h1>

                            <div className='flex'>
                                <div className='w-1/2'>
                                    <img src={img} alt="" />
                                </div>
                                <div className='border border-white shadow-2xl shadow-slate-400  mx-28'>
                                    <form onSubmit={handleSignup} className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="name" className="input input-bordered border border-sky-100 bg-sky-100" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="email" name='email' placeholder="email" className="input input-bordered border border-sky-100 bg-sky-100" required />
                                        </div>

                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Password</span>
                                            </label>
                                            <input type="text" name='password' placeholder="password" className="input input-bordered border border-sky-100 bg-sky-100" required />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Confirm Password</span>
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                name="confirm"
                                                className="input input-bordered border border-sky-100 bg-sky-100"
                                            />
                                        </div>
                                        <div className="form-control mt-6">
                                            <p className="text-purple-800">{passwordError}</p>
                                            {success && (
                                                <p className="text-success text-2xl">User created successfully</p>
                                            )}
                                            <div className='flex justify-center'>
                                                <button className="p-5 bg-sky-100  w-1/2 text-sky-800">SignIn</button>
                                            </div>
                                        </div>
                                    </form>
                                    <p className='text-center mb-12'>All ready have an account <Link to={'/login'} className=' font-bold text-sky-800'>Login</Link></p>
                                    <div className='flex items-center justify-center'>
                                        <p onClick={handleGoogle} className='btn border border-white bg-sky-100 w-1/2 border-white text-center mb-12 p-12 text-1xl shadow-xl shadow-slate-300 text-sky-800'> Google Login</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div> </div>
    );
};

export default Signup;